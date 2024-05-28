import { useEffect, useState } from "react";
import ShowFoodCart from "./ShowFoodCart";

const BrandFoods = () => {
    const [showFood, setShowFood] = useState([])

    useEffect(() => {
        fetch('')
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