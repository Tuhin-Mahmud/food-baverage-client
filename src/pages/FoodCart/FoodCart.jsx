/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import useCarts from '../../hooks/useCarts';
const FoodCart = ({ food }) => {
    const [, refetch] = useCarts()

    const handleDelete = food => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/cart-delete/${food._id}`)

                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product  deleted from in this cart.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    return (
        <div className="px-4 md:p-1">


            <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className=" p-5 rounded-lg h-[200px] w-full object-cover" src={food.image} alt="product image" />

                <div className="px-5 pb-5 ">

                    <div className="flex justify-between">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{food.name}</h5>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
                    </div>

                    <div className="flex items-center mt-2.5 mb-5">
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={food.rating}
                            readOnly
                        />
                        {/* <p className="ml-4">{food.rating}</p> */}
                    </div>
                    <div className="">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">category: {food.category}</span>

                    </div>
                    <div>
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">Price: ${food.price}</span>
                            <button
                                onClick={() => handleDelete(food)}
                                className="btn bg-orange-400 hover:bg-stone-600 duration-500 text-white font-bold ">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCart;