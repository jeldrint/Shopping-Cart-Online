import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Shop from "../components/Shop";
import About from "../components/About";
import Contact from "../components/Contact";
import Cart from "../components/Cart";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children:[
                {path: "shop", element: <Shop />}
            ],
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;