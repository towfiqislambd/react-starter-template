import AuthLayout from "@/Layout/AuthLayout";
import MainLayout from "@/Layout/MainLayout";
import Login from "@/Pages/AuthPages/Login";
import SignUp from "@/Pages/AuthPages/SignUp";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/MainPages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    // Main Layout
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
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
                path: "signup",
                element: <SignUp />
            },
            {
                path: "login",
                element: <Login />
            },
        ],
    },
]);

export default router