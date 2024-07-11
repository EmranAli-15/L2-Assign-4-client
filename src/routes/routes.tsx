import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/home/Landing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing></Landing>,
    },
]);