import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AddJob from "./pages/AddJob.jsx";
import LogInRegistration from "./pages/LogInRegistration.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import BrowseJobs from "./pages/BrowseJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/browse-jobs",
        element: <BrowseJobs />,
      },
      {
        path: "/login",
        element: <LogInRegistration />,
      },
      {
        path: "/job-details",
        element: <JobDetails />,
      },
      {
        path: "/add-jobs",
        element: <AddJob />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
