import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs/:id",
                element: <Blog />
            }
        ]
    }
])

export default router;