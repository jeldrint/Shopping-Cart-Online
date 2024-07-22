import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import ShopSolo from "../components/ShopSolo";
import { useState } from "react";

const Router = () => {
    const [cartItems, setCartItems] = useState([]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/fresh-kicks' />
        },
        {
            path: '/fresh-kicks',
            element: <Navigate to='/fresh-kicks/home' />
        },
        {
            path: "/fresh-kicks/home",
            element: <App cartItems={cartItems} setCartItems={setCartItems} />,
        },
        {
            path: '/fresh-kicks/shop',
            element: <Shop />
        },
        {
            path: "contact",
            element: <Contact />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;

