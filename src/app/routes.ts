import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProjectPage } from "./components/ProjectPage";
import { MoreItemPage } from "./components/MoreItemPage";
import { CarromClubPage } from "./components/CarromClubPage";
import { EnvisioningPage } from "./components/EnvisioningPage";

const basename = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "project/:id", Component: ProjectPage },
      { path: "more/carrom-club", Component: CarromClubPage },
      { path: "more/envisioning-the-future-you", Component: EnvisioningPage },
      { path: "more/:id", Component: MoreItemPage },
    ],
  },
], { basename });
