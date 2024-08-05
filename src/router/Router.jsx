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
            element: <App cartItems={cartItems} setCartItems={setCartItems} />,
            children: [
                {path: 'home', element: <Home /> },
                {path: 'shop', element: <Shop /> },
                {path: 'shop/:name', element: <Shop /> },
                {path: ':id', element: <ShopSolo cartItems={cartItems} setCartItems={setCartItems} /> },
            ]
        },
        {
            path: "contact",
            element: <Contact />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;

