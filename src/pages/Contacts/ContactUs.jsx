import { toast } from "react-toastify";
import Container from "../../components/utils/Container";
import { MdLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const ContactUs = () => {
    const handleFormSubmit = e => {
        e.preventDefault()
        document.getElementById('myForm').reset()
        toast.success('wait for a couple of days; we will give you feedback.')

    }

    // google maps
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -37.814,
        lng: 144.96332
    };
    return (
        <Container>
            <div className="my-5">
                <div className="text-center">
                    <h1 className="text-orange-500 uppercase text-xl md:text-4xl">Leave A Message</h1>
                    <h1 className=" text-gray-600 w-1/2 mx-auto hidden lg:block">At Foodix Restaurant, we’re dedicated to serving you the finest food with a blend of taste, quality, and service.  Whether you have a question, feedback,</h1>
                </div>
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

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="Email" className="rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700 focus:ring-1" required />
                        </div>
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

                    {/* message */}
                    <div className=" mt-2">
                        <textarea name="text" className="textarea outline-none border-gray-300 w-full h-[150px] rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700 focus:ring-1" placeholder="Your Message*"></textarea>
                    </div>
                    <div className="form-control mt-4 border border-gray-300 py-2 rounded bg-slate-400 hover:bg-orange-500 duration-500 transition text-lg text-white ">
                        <input type="submit" value=" Get In Touch" className="" />

                    </div>
                </form>
                {/* -------------- */}
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
                {/* google maps */}
                <div className="mt-5">
                    <LoadScript googleMapsApiKey="YOUR_API_KEY">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={15}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;