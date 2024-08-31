import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllFoodCart from "./AllFoodCart";

const AllFood = () => {

    const { data: allProduct = [], isLoading } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await axios.get('https://food-and-beverage-server-ecru.vercel.app/allProduct')

            return res.data;
        }
    })

    if (isLoading) {
        return <p className="text-2xl text-center my-48">Loading..</p>
    }

    return (
        <div>
            <h2 className="text-center text-3xl font-bold font-serif text-orange-500 mb-4">All Foods Here</h2>

            {/* all product cart */}

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