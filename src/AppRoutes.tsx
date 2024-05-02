import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientEntry from "./client";
import AdminEntry from "./admin";
import Home from "./client/pages/home/Home";
import Page404 from "./error/pages/404";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ClientEntry />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "flights",
          element: <div>Flights</div>,
        },
        {
          path: "hotels",
          element: <div>Hotels</div>,
        },
        {
          path: "contact-us",
          element: <div>Contact</div>,
        },
        {
          path: "about-us",
          element: <div>About</div>,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminEntry />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
