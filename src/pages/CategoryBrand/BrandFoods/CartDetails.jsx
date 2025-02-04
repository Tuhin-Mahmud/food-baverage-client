import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useCarts from "../../../hooks/useCarts";
import Container from "../../../components/utils/Container";

/* eslint-disable react/prop-types */
const CartDetails = () => {
    const { user } = useAuth()
    const [, refetch] = useCarts()
    const cateDetails = useLoaderData()
    // console.log(cateDetails);


    const handleAddToCart = (food) => {

        const cartItem = {
            email: user.email,
            itemId: food._id,
            name: food.brand_name,
            category: food.category,
            image: food.image,
            price: food.price

        }
        axios.post('https://food-and-beverage-server-ecru.vercel.app/added-carts', cartItem)
            .then(res => {
                if (res.data.insertedId) {
                    refetch()
                    Swal.fire({
                        title: 'success!',
                        text: 'food added to the cart successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
            .catch(error => console.log(error))

    }

    return (

        <Container>

            <div className="mt-5">
                <h2 className="text-center text-3xl font-serif font-bold text-orange-700">Product Details</h2>
                <div className="hero  mt-5 bg-base-200">
                    <div className=" justify-between items-center border border-orange-300 w-full flex flex-col lg:flex-row">
                        <div className=" md:w-1/2">
                            {/* <Link to="/category"><button className="text-2xl bg-orange-400 p-2 rounded-full text-white "><FaArrowLeft></FaArrowLeft> </button></Link> */}
                            <img src={cateDetails.image} className="max-w-lg md:w-full  h-[400px]" />
                        </div>
                        <div className="md:w-1/2 ml-5 md:ml-0">
                            <h1 className="text-2xl font-bold">ProductName: <span className="text-orange-400">{cateDetails.brand_name}</span></h1>
                            <h3><span className="font-bold">category:</span> {cateDetails.category}</h3>
                            <p className="py-2"> <span className="font-bold">Price:  <span className="line-through text-orange-500">147</span> </span><span className="text-lg text-orange-500 ">   {cateDetails.price}</span></p>
                            <p className="py-2 "><span className="font-bold">Description: </span>{cateDetails.description}</p>
                            <button onClick={() => handleAddToCart(cateDetails)} className="btn border border-orange-400">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>


    );
};

export default CartDetails;