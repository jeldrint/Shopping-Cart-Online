import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import Cart from "../components/Cart";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "shop",
            element: <Shop />
        },
        {
            path: "contact",
            element: <Contact />,
        },
        {
            path: "cart",
            element: <Cart />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;