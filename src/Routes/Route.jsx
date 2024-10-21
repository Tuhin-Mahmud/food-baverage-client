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
import Contacts from "../pages/Contacts/Contacts";
import ProductUpdate from "../pages/ProductUpdate/ProductUpdate";
import MenuTabs from "../pages/Menu/MenuTabs";
import OrderDetails from "../pages/Menu/OrderDetails";
import Reservation from "../pages/Reservation/Reservation";
import Booking from "../pages/Booking/Booking";
import ContactUs from "../pages/Contacts/ContactUs";
import Blogs from "../pages/Blogs/Blogs";
import BlogsDetails from "../pages/Blogs/BlogsDetails";
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
                path: '/allFoodUpdate/:id',
                element: <ProductUpdate />,
                loader: ({ params }) => fetch(`https://food-and-beverage-server-ecru.vercel.app/read-singleProduct/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contacts />
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
            },
            {
                path: '/category/:category',
                element: <CategoryBrand></CategoryBrand>
            },
            {
                path: '/categoryDetails/:id',
                element: <PrivetRout><CartDetails></CartDetails></PrivetRout>,
                loader: ({ params }) => fetch(`https://food-and-beverage-server-ecru.vercel.app/read-category/${params.id}`)

            },
            {
                path: '/menuTabs',
                element: <MenuTabs />

            },
            {
                path: '/orderDetails/:id',
                element: <OrderDetails />,
                loader: ({ params }) => fetch(`https://food-and-beverage-server-ecru.vercel.app/menu/${params.id}`)

            },

            {
                path: 'reservation',
                element: <Reservation />,

            },
            {
                path: 'booking',
                element: <Booking />,

            },
            {
                path: 'blogs',
                element: <Blogs />,

            },
            {
                path: 'blogDetails/:id',
                element: <BlogsDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)

            },
            {
                path: 'ContactUs',
                element: <ContactUs />,

            },
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