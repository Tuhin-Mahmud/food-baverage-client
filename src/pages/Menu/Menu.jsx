// import { useState } from "react";
import Container from "../../components/utils/Container";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import popularImg1 from '../../assets/images/popular/popular1.jpg'
import popularImg2 from '../../assets/images/popular/popular2.jpg'
import popularImg3 from '../../assets/images/popular/popular3.jpg'
import popularImg4 from '../../assets/images/popular/popular4.jpg'
import { Link } from "react-router-dom";

import 'react-tabs/style/react-tabs.css';
// import MenuCart from "./MenuCart";


const Menu = () => {
    // const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu()
    console.log(menu);

    return (
        <Container>
            <div>
                <div className="text-center mb-20">
                    <h4 className="text-lg md:text-xl font-medium text-orange-500">Most Popular Choise</h4>
                    <h2 className="text-xl md:text-3xl font-bold font-serif">Service We Can Provide</h2>
                </div>
                {/* ------------ */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                    {/* cart 1 */}
                    <div>
                        <div className="card bg-white  border h-[380px]">
                            <figure className="px-10 pt-10 -mt-24">
                                <img
                                    src={popularImg1}
                                    alt="Shoes"
                                    className="rounded-full w-40 h-40 border-4  shadow-slate-100  hover:rotate-12 duration-500 shadow-xl object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title capitalize">
                                    grilled cheese burger
                                </h2>
                                <p className="text-orange-500 font-semibold">Price: $27</p>
                                <p className="text-gray-500">Welcome to foodix, your ultimate destination for a delightful culinary experience.</p>
                                <div className="">
                                    <Link to={'/menuTabs'}>
                                        <button className="bg-orange-500 px-3 py-3 rounded-lg text-white uppercase hover:bg-[#1E2A5E] duration-500 transition">
                                            order here
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="">
                        <div className="card bg-white  border h-[380px]">
                            <figure className="px-10 pt-10 -mt-24">
                                <img
                                    src={popularImg2}
                                    alt="Shoes"
                                    className="rounded-full w-40 h-40 border-4  shadow-slate-100  hover:rotate-12 duration-500 shadow-xl object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title capitalize">
                                    Coca-Cola Zero Sugar
                                </h2>
                                <p className="text-orange-500 font-semibold">Price: $ 27.99</p>
                                <p className="text-gray-500">the classic taste of Coca-Cola without the sugar.</p>
                                <div className="">
                                    <Link to={'/menuTabs'}>
                                        <button className="bg-orange-500 px-3 py-3 rounded-lg text-white uppercase hover:bg-[#1E2A5E] duration-500 transition">
                                            order here
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div>
                        <div className="card bg-white  border h-[380px] ">
                            <figure className="px-10 pt-10 -mt-24">
                                <img
                                    src={popularImg3}
                                    alt="Shoes"
                                    className="rounded-full w-40 h-40 border-4  shadow-slate-100  hover:rotate-12 duration-500 shadow-xl object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title capitalize">
                                    Chicken McNuggets
                                </h2>
                                <p className="text-orange-500 font-semibold">Price: $31.2</p>
                                <p className="text-gray-500">Chicken McNuggets are bite-sized pieces of chicken.</p>
                                <div className="">
                                    <Link to={'/menuTabs'}>
                                        <button className="bg-orange-500 px-3 py-3 rounded-lg text-white uppercase hover:bg-[#1E2A5E] duration-500 transition">
                                            order here
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div>
                        <div className="card bg-white  border h-[380px] ">
                            <figure className="px-10 pt-10 -mt-24">
                                <img
                                    src={popularImg4}
                                    alt="Shoes"
                                    className="rounded-full w-40 h-40 border-4  shadow-slate-100  hover:rotate-12 duration-500 shadow-xl object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title capitalize">
                                    Hotcakes
                                </h2>
                                <p className="text-orange-500 font-semibold">Price: $27</p>
                                <p className="text-gray-500">Hotcakes are a popular breakfast item at McDonald&apos;s, featuring fluffy.</p>
                                <div className="">
                                    <Link to={'/menuTabs'}>
                                        <button className="bg-orange-500 px-3 py-3 rounded-lg text-white uppercase hover:bg-[#1E2A5E] duration-500 transition">
                                            order here
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        </Container>
    );
};

export default Menu;