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
                path: '/myCart',
                element: <MyCart></MyCart>,
                // loader: () => fetch('http://localhost:5000/foods')

            },
            {
                path: '/category/:category',
                element: <PrivetRout><CategoryBrand></CategoryBrand></PrivetRout>
            },
            {
                path: '/cartDetails/:id',
                element: <PrivetRout><CartDetails></CartDetails></PrivetRout>,
                loader: ({ params }) => fetch(`https://food-and-beverage-server-gpvzpnsw4-tuhins-projects-ebb2edde.vercel.app/addedProduct/${params.id}`)

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