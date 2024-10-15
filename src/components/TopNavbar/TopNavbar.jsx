import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const TopNavbar = () => {
    const [header, setHeader] = useState(false)
    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        // Clean up event listener on component unmount
        // return () => {
        //     window.removeEventListener('scroll', scrollHeader);
        // };
    }, [])
    return (
        <div className={header ? "fixed w-[100%]" : ""}>
            <div className="hidden lg:block">
                <div className="bg-[#E85C0D] h-11 text-white flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <FaPhoneVolume className="text-2xl" />
                            <h2>+880173985473</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-2xl" />
                            <h2>Foodix@gamil.com</h2>
                        </div>
                    </div>
                    <div className="flex items-center  gap-3 text-2xl">
                        <FaGithub />
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;