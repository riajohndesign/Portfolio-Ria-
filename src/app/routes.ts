import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProjectPage } from "./components/ProjectPage";

const basename = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "project/:id", Component: ProjectPage },
    ],
  },
], { basename });
