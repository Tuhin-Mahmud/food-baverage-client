import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCart = ({ product }) => {
    const { name, image } = product
    return (
        <div>
            <Link to={`/category/${name}`}>
                <div className="card h-[270px] w-[250px] bg-base-100 shadow-xl">
                    <figure><img className="w-[250px] p-3 h-[200px] rounded" src={image} alt="product" /></figure>
                    <h2 className=" text-2xl font-medium text-center">{name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default ProductCart;