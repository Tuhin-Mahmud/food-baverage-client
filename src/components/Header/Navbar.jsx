import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/images/logo/logo.jpg'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart,] = useCarts()
    const [header, setHeader] = useState(false)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navLink = <>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/">Home</NavLink></li>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/allFoods">All Foods</NavLink></li>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/ContactUs">Contact s</NavLink></li>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/booking">Booking Table</NavLink></li>
        {
            user?.email ?
                <li className="font-serif text-lg font-bold hover:text-orange-600"><button onClick={handleLogOut}>Log out </button></li>
                :
                <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/logIn">LogIn</NavLink></li>
        }
    </>


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
        <div className={header ? ' fixed w-[100%] z-10 bg-white duration-700 transition' : 'bg-white '}>
            <div className="navbar bg-white px-6 border-b-2 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-300 rounded-box w-52">
                            {

                                navLink

                            }
                        </ul>
                    </div>
                    <div className="">
                        <img className="rounded-full w-10 h-10 hidden md:block mx-auto" src={logo} alt="" />
                        <Link to='/'><h2 className="text-xl ml-2 font-bold font-serif"><span className="text-orange-600 ">FOOD</span>IX</h2></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <div className="navbar-end border-rounded   ">
                    <button className=" rounded-lg">
                        <Link to='/myCart'>
                            <div className="flex items-center gap-3 p-1">
                                <button className="btn">
                                    <FaShoppingCart className="text-xl" />
                                    <div className="badge">+{cart.length}</div>
                                </button>
                                {/*
                                <p className="text-xl">{cart.length}</p> */}
                            </div>
                        </Link>

                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;