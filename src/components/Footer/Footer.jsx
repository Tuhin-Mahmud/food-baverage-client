import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { toast } from "react-toastify";

const Footer = () => {
    const handleSubmit = e => {
        e.preventDefault()
        toast.success('Thanks for subsCribe our news latter.')
        // document.getElementById('myInputField').reset()
    }
    return (
        <div className="bg-[#243642] text-white">

            <div className="py-16">
                <div className="md:flex  justify-around bg-base-200 text-base-content p-10 space-y-5">
                    {/* about */}
                    <aside className="text-center md:text-start md:w-1/5  space-y-2">
                        <h1 className="text-4xl font-medium font-serif">About Us</h1>
                        <p>Foodix is your go-to platform for  discovering and enjoying the best dining experiences   with a variety of delicious  options to  satisfy every craving.</p>
                        <div className="flex items-center gap-7">
                            <FaFacebook className="bg-gray-600 px-2  py-1 rounded text-4xl" />
                            <FaTwitter className="bg-gray-600 px-2  py-1 rounded text-4xl" />
                            <FaYoutube className="bg-gray-600 px-2  py-1 rounded text-4xl" />
                            <FaLinkedin className="bg-gray-600 px-2  py-1 rounded text-4xl" />
                        </div>
                    </aside>
                    {/* explore */}
                    <nav className="flex flex-col text-center md:text-start space-y-2">
                        <h6 className="text-4xl font-medium font-serif">Explore</h6>
                        <a className="link link-hover flex items-center gap-1"><FaArrowRight className="text-sm" /> Company Profile</a>
                        <a className="link link-hover flex items-center gap-1"><FaArrowRight className="text-sm" /> About</a>
                        <a className="link link-hover flex items-center gap-1"><FaArrowRight className="text-sm" /> Help Center</a>
                        <a className="link link-hover flex items-center gap-1"><FaArrowRight className="text-sm" /> Career</a>
                        <a className="link link-hover flex items-center gap-1"><FaArrowRight className="text-sm" /> Contact</a>

                    </nav>
                    {/* contact info */}
                    <nav className="flex flex-col text-center md:text-start space-y-2">
                        <h6 className="text-4xl font-medium font-serif">Contact Info</h6>
                        <a className="link link-hover flex gap-2 items-center"><IoLocationSharp className="bg-gray-600 px-2  py-1 rounded text-4xl  " />LA,4567
                            Dhaka Uttara</a>
                        <a className="link link-hover flex gap-2 items-center"><FaPhoneAlt className="bg-gray-600 px-2  py-1 rounded text-4xl  " />+880863528563</a>

                        <a className="link link-hover flex gap-2 items-center"><MdOutgoingMail className="bg-gray-600 px-2  py-1 rounded text-4xl  " />Foodix@gamil.com</a>

                    </nav>
                    {/* news latter */}
                    <nav className="flex flex-col text-center md:text-start space-y-2 ">
                        <h6 className="text-4xl font-medium font-serif">NewsLetter</h6>
                        <p>Join our subscribers list to <br /> get the latest news and special offers.</p>
                        {/* input field */}
                        <div>
                            <form>
                                <div className="flex items-center  mt-5">
                                    <input id="myInputField" type="email" name="email" placeholder="Email" className="bg-gray-600 px-2 py-1 rounded focus-visible:outline-none border-b-2 w-full" />

                                    <p onClick={handleSubmit} type="submit" className="cursor-pointer bg-slate-600 px-2 py-2 rounded-r-sm border-b-2 "><FaArrowRight className="" /></p>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
                {/* bottom */}

            </div >
            <aside className="bg-gray-500 py-5 text-center text-sm text-white dark:bg-gray-800">
                <p>&copy; Copyright 2024. Foodix All Rights Reserved.</p>
            </aside>
        </div >
    );
};

export default Footer;