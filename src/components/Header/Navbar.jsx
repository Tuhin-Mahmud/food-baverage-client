import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/images/logo/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCarts()


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navLink = <>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/">Home</NavLink></li>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/allFoods">All Foods</NavLink></li>
        <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/contact">Contact us</NavLink></li>
        {
            user?.email ?
                <li className="font-serif text-lg font-bold hover:text-orange-600"><button onClick={handleLogOut}>Log out </button></li>
                :
                <li className="font-serif text-lg font-bold hover:text-orange-600"><NavLink to="/logIn">LogIn</NavLink></li>
        }
    </>



    return (
        <div className="navbar bg-white ">
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
                <div className="flex items-center">
                    <img className="rounded-full w-8 h-8" src={logo} alt="" />
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
                <button className="border rounded-lg border-orange-300">
                    <Link to='/myCart'>
                        <div className="flex items-center gap-3 p-3">
                            <FaShoppingCart className="text-xl" />
                            <p className="text-xl">{cart.length}</p>
                        </div>
                    </Link>

                </button>
            </div>
        </div>
    );
};

export default Navbar;