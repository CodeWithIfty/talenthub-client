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
import MyPostedJobs from "./pages/MyPostedJobs.jsx";
import MyBids from "./pages/MyBids.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import BidRequest from "./pages/BidRequest.jsx";
import AuthProvider from "./utils/context/AuthProvider.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-jobs",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-jobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            {" "}
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "/bid-request",
        element: (
          <PrivateRoute>
            <BidRequest />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
