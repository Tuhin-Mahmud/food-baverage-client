
import FoodCart from "../FoodCart/FoodCart";
import useCarts from "../../hooks/useCarts";



const MyCart = () => {
    const [cart,] = useCarts()
    console.log(cart);

    return (
        <div className="">
            <h1 className="text-center text-4xl font-medium mb-3 text-orange-500">Your Carts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    cart.map(food => <FoodCart
                        key={food._id}
                        food={food}
                    ></FoodCart>)
                }
            </div>
        </div>
    );
};

export default MyCart;