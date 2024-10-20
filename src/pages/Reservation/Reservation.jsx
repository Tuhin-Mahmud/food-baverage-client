import { FaPhoneVolume } from "react-icons/fa6";
import Container from "../../components/utils/Container";
import { MdLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useBooking from "../../hooks/useBooking";
import Loader from "../../components/utils/Loader";

// import { BsFillSendFill } from "react-icons/bs";

const Reservation = () => {
    const [, refetch, isLoading] = useBooking()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = user?.email;
        const date = form.date.value;
        const text = form.text.value;
        const image = user?.photoURL
        // const email = user?.email;
        const information = {
            name,
            phone,
            email,
            text,
            date,
            image
        }
        console.log(information);
        axios.post('http://localhost:5000/reservation', information)
            .then(res => {
                console.log(res.data);
                refetch()
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Booking Table successfully!",
                        text: "Your file has been booking a table.",
                        icon: "success"
                    });
                }
            })

        document.getElementById('myForm').reset()


    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <Container>

            <div className="min-h-screen md:mx-28">
                <h1 className="text-center text-xl md:text-4xl text-orange-400 font-medium font-serif my-5">Book A Table</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* 1 */}
                    <div className=" border px-10 py-12 rounded-md">
                        <FaPhoneVolume className="text-2xl mb-2  m-auto  md:text-5xl text-[#243642] " />
                        <div className="space-y-2 text-center">
                            <h2 className="font-medium text-xl md:text-3xl text-gray-700 font-mono">Hotline</h2>
                            <p className="text-gray-700">+880863528563</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className=" border px-10 py-12 rounded-md">
                        <MdLocationOn className="text-2xl mb-2  m-auto  md:text-5xl text-[#243642] " />
                        <div className="space-y-2 text-center">
                            <h2 className="font-medium text-xl md:text-3xl text-gray-700 font-mono">Our Location</h2>
                            <p className="text-gray-700">LA,4567
                                Dhaka Uttara</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className=" border px-10 py-12 rounded-md">
                        <MdOutlineMarkEmailUnread className="text-2xl mb-2  m-auto  md:text-5xl text-[#243642] " />
                        <div className="space-y-2 text-center">
                            <h2 className="font-medium text-xl md:text-3xl text-gray-700 font-mono">Official Email</h2>
                            <p className="text-gray-700">Foodix@gamil.com</p>
                        </div>
                    </div>
                </div>
                {/* reservation form */}
                <div className="bg-white rounded-md shadow-2xl mt-2 py-3">
                    <div>
                        <div className="text-center">
                            <h1 className="text-orange-500 uppercase ">Keep in Touch</h1>
                            <h1 className="text-3xl font-medium text-gray-600">Send a Massage</h1>
                        </div>
                        {/* form */}
                        <div>
                            <form id="myForm" onSubmit={handleFormSubmit} className="card-body">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* name */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text"
                                            name="name"
                                            placeholder="Name" className="rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700 focus:ring-1" required />
                                    </div>
                                    {/* phone */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="number"
                                            name="phone"
                                            placeholder="Phone number" className="rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700 focus:ring-1" required />
                                    </div>
                                    {/* email */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">email</span>
                                        </label>
                                        <input type="email"
                                            name="email"
                                            placeholder="Email" className="rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700 focus:ring-1" required />
                                    </div>
                                    {/* date */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date"
                                            name="date"
                                            placeholder="Phone number" className="rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700 focus:ring-1" required />
                                    </div>
                                </div>
                                {/* message */}
                                <div className=" mt-2">
                                    <textarea name="text" className="textarea outline-none border-gray-300 w-full h-[150px] rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700 focus:ring-1" placeholder="Your Message*"></textarea>
                                </div>
                                <div className="form-control mt-4 border border-gray-300 py-2 rounded bg-slate-400 hover:bg-orange-500 duration-500 transition text-lg text-white ">
                                    <input type="submit" value=" Get In Touch" className="" />

                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Reservation;