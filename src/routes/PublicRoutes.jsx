
import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PropertyDetails from "../pages/propertyDetail/PropertyDetail";
import PrivateRoute from "./PrivateRoute";
const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/properties',
                element: <Home></Home>
            },
            {
                path: '/properties/:id',
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch('/propertyList.JSON')

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
]);

export default PublicRoutes;
