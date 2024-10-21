import axios from "axios";
import Container from "../../components/utils/Container";
import Loader from "../../components/utils/Loader";
import useBooking from "../../hooks/useBooking";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Booking = () => {
    const [reservation, refetch, isLoading] = useBooking()
    console.log(reservation);


    if (isLoading) {
        return <Loader />
    }

    const handleDelete = id => {
        axios.delete(`https://food-and-beverage-server-ecru.vercel.app/reservation/${id}`)
            .then(res => {
                console.log(res.data);

                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't delete this table!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });
            })
    }



    return (

        <Container>
            <div className="min-h-screen">
                <h2 className="text-center text-orange-500 text-xl my-3 md:text-3xl">Booking Your Table Here</h2>

                {reservation.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            #
                                        </label>
                                    </th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reservation.map((booking, indx) => <tr key={booking._id}>
                                        <th>
                                            {indx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={booking.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {booking.name}
                                        </td>
                                        <td>{booking.email}</td>
                                        <td>{booking.date}</td>
                                        <th>
                                            <button
                                                onClick={() => handleDelete(booking._id)}
                                                className="btn btn-ghost btn-xs"><MdOutlineDeleteOutline className="text-2xl text-red-600" />
                                            </button>
                                        </th>
                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>
                    :
                    <p className="text-xl md:text-5xl flex items-center gap-5 justify-center mt-7 text-gray-700">You Add The Table
                        First <Link to={'/reservation'} className="px-3 py-1 rounded bg-orange-500 "><FaArrowRight className="text-2xl animate-bounce" /></Link></p>
                }


            </div>
        </Container >
    );
};

export default Booking;