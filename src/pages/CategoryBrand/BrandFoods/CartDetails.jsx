
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CartDetails = () => {
    const foodDetail = useLoaderData()
    // console.log(foodDetail);


    const handleAddToCart = (food) => {

        fetch(`http://localhost:5000/carts/${food._id}`, {
            method: 'POST',
            headers: {
                'content': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'food added to the cart successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }

    return (

        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200">
                <div className="flex justify-between items-center border border-orange-300 w-full">
                    <div className="hero-content flex-col  lg:flex-row md:w-1/2">
                        <Link to="/category"><button className="text-2xl bg-orange-400 p-2 rounded-full text-white "><FaArrowLeft></FaArrowLeft> </button></Link>
                        <img src={foodDetail.photo} className="max-w-sm rounded-lg shadow-2xl h-[400px]" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold">ProductName: <span className="text-orange-400">{foodDetail.name}</span></h1>
                        <p className="py-2">Price: <span className="text-lg text-orange-500">{foodDetail.price}</span></p>
                        <p className="py-2">Price: <span className="text-lg text-orange-500">{foodDetail.description}</span></p>
                        <button onClick={() => { handleAddToCart(foodDetail) }} className="btn border border-orange-400">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CartDetails;