import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MenuCart = ({ item }) => {
    const { image, name, price, _id } = item || {};
    console.log(item);


    return (

        <div className=" bg-white  border pb-4">
            <figure className="px-8 pt-8 ">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-full w-48 h-48 border-4 mx-auto shadow-slate-100  hover:rotate-12 duration-500 shadow-xl object-cover" />


            </figure>

            <div className="text-center mt-2">
                <h2 className=" capitalize">
                    {name}
                </h2>
                <p className="text-orange-500 font-semibold">${price}</p>

                <div className="">
                    <Link to={`/orderDetails/${_id}`}>
                        <button className="bg-orange-500 px-3 py-3 rounded-lg text-white uppercase hover:bg-[#1E2A5E] duration-500 transition border-b-2 border-stone-600">
                            Add To Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default MenuCart;