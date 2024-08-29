/* eslint-disable react/prop-types */

const AllFoodCart = ({ allProduct }) => {
    const { image, brand_name, category, price, description } = allProduct || {};
    // console.log(brand_name);
    return (
        <div>
            <div className="card bg-base-100 image-full  shadow-xl h-[300px]">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white text-2xl">{brand_name}</h2>
                    <p className="text-white">category: {category}</p>
                    <p className="text-white">{description}</p>
                    <p className="absolute right-0 top-0 rounded opacity-70 text-white bg-black p-2 ">price: {price}</p>

                    <div className="card-actions justify-end">
                        <button className=" text-white btn btn-secondary">update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCart;