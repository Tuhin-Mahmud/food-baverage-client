import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllFoodCart from "./AllFoodCart";

const AllFood = () => {

    const { data: allProduct = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allProduct')
            console.log(allProduct);
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-center text-3xl font-bold font-serif text-orange-500">All Foods Here</h2>

            {/* all product cart */}
            <h1>{allProduct.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    allProduct.map(product => <AllFoodCart
                        key={product._id}
                        allProduct={product}
                    ></AllFoodCart>)
                }
            </div>



        </div>
    );
};

export default AllFood;