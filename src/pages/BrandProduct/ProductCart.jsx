import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCart = ({ product }) => {
    const { name, image } = product
    return (
        <div>
            <Link to={`/category/${name}`}>
                <div className="card h-[270px] mx-auto w-[350px] md:w-[250px] bg-base-100 shadow-xl">
                    <figure><img className="w-[250px] p-3 h-[200px] rounded" src={image} alt="product" /></figure>
                    <div className="flex items-center justify-between px-5">
                        <h2 className=" text-2xl font-medium text-center capitalize">{name}</h2>
                        <p><FaArrowRight className="text-xl text-orange-500" /></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCart;