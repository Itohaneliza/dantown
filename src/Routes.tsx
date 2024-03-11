import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
// import DashboardUITemplateOne from "../src/pages/DashboardUITemplateOne/index";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    // {
    //   path: "dashboarduitemplateone",
    //   element: <DashboardUITemplateOne />,
    // },
  ]);

  return element;
};

export default ProjectRoutes;
