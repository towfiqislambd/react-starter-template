import AuthLayout from "@/Layout/AuthLayout";
import DashboardLayout from "@/Layout/DashboardLayout";
import MainLayout from "@/Layout/MainLayout";
import Login from "@/Pages/AuthPages/Login";
import Register from "@/Pages/AuthPages/Register";
import DashboardHome from "@/Pages/DashboardPages/DashboardHome";
import Settings from "@/Pages/DashboardPages/Settings";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/MainPages/Home";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "@/Router/PrivateRoute";

const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // Auth Layout
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  // Dashboard Layout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
