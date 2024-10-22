import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FcOk } from "react-icons/fc";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
// import { useEffect, useRef, useState } from "react";
import Container from "../../components/utils/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import ProductCart from "../BrandProduct/ProductCart";
import useCarts from "../../hooks/useCarts";
import Comment from "./Comment";
// import useCarts from "../../hooks/useCarts";





const OrderDetails = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCarts()
    // const [cart, refetch] = useCarts()
    const [brandProduct, setBrandProduct] = useState([])

    const { brand_name, image, price, previousPrice, description, rating } = useLoaderData()




    // add to cart
    const handleAddToCart = () => {
        if (user) {
            const menuInfo = {
                image,
                brand_name,
                rating,
                price,
                email: user?.email,
            }
            axiosPublic.post('/added-carts', menuInfo)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: "Added to the cart!",
                            text: "Your food cart added to the cart.",
                            icon: "success"
                        });
                    }

                })
        }
        else {
            Swal.fire({
                title: "Please Login?",
                text: "if you login, than add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                navigate('/login', { state: { from: location } })

            });
        }


    }


    //brand related data
    useEffect(() => {
        fetch('https://food-and-beverage-server-ecru.vercel.app/read-brand')
            .then(res => res.json())
            .then(data => {
                setBrandProduct(data)
            })
    }, [])

    return (
        <Container>
            <div>
                <div className="hero bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="flex-1 px-5  border ">
                            <img
                                src={image}
                                className="w-full rounded-xl p-10  shadow-2xl" alt="details image" />
                        </div>
                        <div className="flex-1 space-y-4">
                            <h1 className="md:text-3xl font-bold text-gray-600">{brand_name}</h1>
                            <div className="flex gap-4  justify-between">
                                <div className="flex items-center gap-6">
                                    <p className=" text-orange-500 text-xl font-bold ">${price}</p>
                                    <p className="line-through  text-gray-800 text-xl ">${previousPrice}</p>
                                </div>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <h2 className="bg-slate-400 px-2 w-32 items-center gap-3 rounded text-white flex"><FcOk /> In stock</h2>
                            <p className="text-gray-500">{description}</p>
                            <div>
                                <button onClick={() => handleAddToCart()} className="btn btn-primary"><MdOutlineShoppingCart className="text-lg " />
                                    Add To Cart </button>
                                <button className=" hover:bg-orange-400 border md:ml-3 ml-0 p-3 rounded-full">
                                    <GiSelfLove className="text-2xl" />
                                </button>
                                <div className="flex items-center mt-5 bg-gray-300 px-3 py-2 rounded text-gray-500">
                                    <CiDeliveryTruck className="text-2xl mr-2 " />
                                    <p>2-day-Delivery  ------  Speedy and reliable parcel delivery!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tabs */}
                <Comment />
            </div>
            {/* related product */}
            <div>
                <div className="mt-8 ">
                    <h2 className="text-4xl font-bold  mb-3 text-orange-500 capitalize font-serif">Related Foods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            brandProduct.map(product => <ProductCart
                                key={product._id}
                                product={product}
                            ></ProductCart>)
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default OrderDetails;