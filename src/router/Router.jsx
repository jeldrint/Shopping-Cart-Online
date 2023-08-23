import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import ShopSolo from "../components/ShopSolo";
import { useState } from "react";

const Router = () => {
    const [cartItems, setCartItems] = useState([]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App cartItems={cartItems} />,
            children: [
                {path: 'home', element: <Home />},
                {path: 'shop', element: <Shop />},
                {path: 'shop/:name', element: <Shop />},
                {path: ':id', element: <ShopSolo setCartItems={setCartItems} />}
            ]
        },
        {
            path: "contact",
            element: <Contact />,
        },
        {
            path: "cart",
            element: <Cart cartItems={cartItems} />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;