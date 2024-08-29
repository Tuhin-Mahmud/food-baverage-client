import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOute/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import CategoryBrand from "../pages/CategoryBrand/CategoryBrand";
import PrivetRout from "./PrivetRout/PrivetRout";
import CartDetails from "../pages/CategoryBrand/BrandFoods/CartDetails";
import AllFood from "../pages/AllFood/AllFood";
// import PrivetRout from "./PrivetRout/PrivetRout";
// import ShowFoods from "../pages/ShowFoods/ShowFoods";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/addProduct',
                element: <PrivetRout><AddProduct></AddProduct></PrivetRout>,

            },
            {
                path: '/allFoods',
                element: <AllFood></AllFood>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
            },
            {
                path: '/category/:category',
                element: <PrivetRout><CategoryBrand></CategoryBrand></PrivetRout>
            },
            {
                path: '/categoryDetails/:id',
                element: <PrivetRout><CartDetails></CartDetails></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/read-category/${params.id}`)

            }
        ]
    },
    {
        path: '/logIn',
        element: <LogIn></LogIn>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default router;