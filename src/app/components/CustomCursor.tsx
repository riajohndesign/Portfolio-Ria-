import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [label, setLabel] = useState("");

  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);

  const ringX = useSpring(dotX, {
    damping: 22,
    stiffness: 280,
    mass: 0.4,
  });
  const ringY = useSpring(dotY, {
    damping: 22,
    stiffness: 280,
    mass: 0.4,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);

      const el = document.elementFromPoint(
        e.clientX,
        e.clientY,
      );
      if (!el) return;

      const isLink = !!el.closest(
        "a, button, [role='button'], input, label, select",
      );
      const projectCard = el.closest("[data-cursor='view']");
      setIsPointer(isLink);
      setLabel(projectCard ? "View" : "");
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener(
      "mouseleave",
      onLeave,
    );
    document.documentElement.addEventListener(
      "mouseenter",
      onEnter,
    );

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        onLeave,
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        onEnter,
      );
    };
  }, []);

  // Hide on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  const ringSize = label ? 72 : isPointer ? 48 : 36;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          background: "var(--fg)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border flex items-center justify-center overflow-hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSize,
          height: ringSize,
          borderColor: "var(--fg)",
          opacity: visible ? 0.55 : 0,
          transition:
            "opacity 0.2s, width 0.25s ease, height 0.25s ease",
          background: label ? "var(--fg)" : "transparent",
        }}
      >
        {label && (
          <span
            className="font-syne text-[10px] tracking-wide"
            style={{ color: "var(--bg)" }}
          >
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}