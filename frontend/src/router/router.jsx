import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Signup />
            },

        ]
    },

    {
        path: "/dashboard",
        element: <Dashboard />
    }

])