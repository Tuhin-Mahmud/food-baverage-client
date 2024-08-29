import { useLoaderData } from "react-router-dom";
import FoodCart from "../FoodCart/FoodCart";



const MyCart = () => {


    return (
        <div className="">
            <h1 className="text-center text-4xl font-medium mb-3">All Foods Here</h1>
            <div className="grid md:grid-cols-4 gap-4">
                {/* {
                    foods.map(food => <FoodCart
                        key={food._id}
                        food={food}
                    ></FoodCart>)
                } */}
            </div>
        </div>
    );
};

export default MyCart;