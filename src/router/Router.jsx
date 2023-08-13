import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Store from "../components/Store";
import Home from "../components/Home";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/store",
            element: <Store />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;