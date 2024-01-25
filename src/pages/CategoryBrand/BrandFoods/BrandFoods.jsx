import { useEffect, useState } from "react";
import ShowFoodCart from "./ShowFoodCart";

const BrandFoods = () => {
    const [showFood, setShowFood] = useState([])

    useEffect(() => {
        fetch(' https://food-and-beverage-server-gpvzpnsw4-tuhins-projects-ebb2edde.vercel.app/addedProduct')
            .then(res => res.json())
            .then(data => setShowFood(data))
    }, [])

    return (
        <div className="grid md:grid-cols-4 gap-4 mt-10">
            {
                showFood.map(food => <ShowFoodCart
                    key={food._id}
                    food={food}
                ></ShowFoodCart>)
            }
        </div>
    );
};

export default BrandFoods;