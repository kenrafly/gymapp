import WebPage from "./WebPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import DiscoverCourses from "../components/DiscoverCourses/DiscoverCourses.jsx";
import ExerciseDetail from "../components/ExerciseDetail/ExerciseDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Directly renders App without Navbar and Footer
    element: <WebPage />,
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

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
