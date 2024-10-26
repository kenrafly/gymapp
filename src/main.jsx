import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import DiscoverCourses from "../components/DiscoverCourses/DiscoverCourses.jsx";
import ExerciseDetail from "../components/ExerciseDetail/ExerciseDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Directly renders App without Navbar and Footer
    element: <App />,
  },
  {
    path: "/", // Uses Layout with Navbar and Footer for other routes
    element: <Layout />,
    children: [
      {
        path: "discover",
        element: <DiscoverCourses />,
      },
      {
        path: "discover/:id",
        element: <ExerciseDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
