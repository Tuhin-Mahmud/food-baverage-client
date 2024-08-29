/* eslint-disable react/prop-types */


import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const SingleProduct = ({ food }) => {
    console.log(food);
    const { _id, image, brand_name, category, description, price, rating } = food || {};

    return (
        <div>
            <div>
                <div className="card card-compact  bg-base-300 shadow-xl h-[500px]">
                    <figure><img className="w-full h-[210px] object-cover" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-lg border rounded-xl font-bold border-orange-400 bg-slate-200">{brand_name}</h2>
                        <p className="text-lg">Category:{category}</p>
                        <p className="">price: <span className="text-orange-400">${price}</span></p>
                        <p className="text-lg">description:{description}</p>
                        <p className="text-lg">rating: {rating}</p>
                        <div className="card-actions justify-end">

                            <Link to={`/categoryDetails/${_id}`}><button className="text-2xl bg-orange-400 p-2 rounded-full text-white "><FaArrowRight></FaArrowRight> </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;