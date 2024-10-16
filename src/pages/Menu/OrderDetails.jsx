import { useLoaderData } from "react-router-dom";
import { FcOk } from "react-icons/fc";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
// import { useEffect, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from "../../components/utils/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";




const OrderDetails = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { name, image, price, previousPrice, recipe, rating } = useLoaderData()
    // --------------

    // -------------

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const text = form.text.value;
        const name = form.name.value;
        const email = form.email.value;
        const photo = user.photoURL;

        const userComment = {
            text,
            name,
            email,
            userComment,
            photo
        }
        axiosPublic.post('/comment', userComment)
            .then(res => {
                console.log(res.data);
            })

    }

    return (
        <Container>
            <div>
                <div className="hero bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="flex-1 px-5  border ">
                            <img
                                src={image}
                                className="w-full rounded-xl p-10  shadow-2xl" alt="details image" />
                        </div>
                        <div className="flex-1 space-y-4">
                            <h1 className="md:text-3xl font-bold">{name}</h1>
                            <div className="flex gap-4  justify-between">
                                <div className="flex items-center gap-6">
                                    <p className=" text-orange-500 text-xl font-bold ">${price}</p>
                                    <p className="line-through  text-gray-800 text-xl ">${previousPrice}</p>
                                </div>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <h2 className="bg-slate-400 px-2 w-32 items-center gap-3 rounded text-white flex"><FcOk /> In stock</h2>
                            <p className="text-gray-500">{recipe}</p>
                            <div>
                                <button className="btn btn-primary"><MdOutlineShoppingCart className="text-lg " />
                                    Add To Cart </button>
                                <button className=" hover:bg-orange-400 border md:ml-3 ml-0 p-3 rounded-full">
                                    <GiSelfLove className="text-2xl" />
                                </button>
                                <div className="flex items-center mt-5 bg-gray-300 px-3 py-2 rounded text-gray-500">
                                    <CiDeliveryTruck className="text-2xl mr-2 " />
                                    <p>2-day-Delivery  ------  Speedy and reliable parcel delivery!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tabs */}

                <div className="mt-10">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList >
                            <Tab>
                                Description
                            </Tab>
                            <Tab>
                                Additional Information
                            </Tab>
                            <Tab>
                                Review
                            </Tab>

                        </TabList>
                        <TabPanel>
                            <div className="">
                                <p>{recipe}</p>
                                <p>This Classic Spaghetti Carbonara is a delicious and creamy Italian pasta dish made with just a few simple ingredients. The sauce is created by combining eggs, Parmesan cheese, and crispy pancetta, all tossed together with freshly cooked spaghetti. It’s a comforting, easy-to-make meal that’s perfect for weeknight dinners or a quick, indulgent treat. The dish is rich, savory, and bursting with flavor, making it a favorite for pasta lovers.</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="overflow-x-auto px-10">
                                <table className="table">

                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Weight</td>
                                            <td>240 Ton</td>

                                        </tr>
                                        {/* row 2 */}
                                        <tr className="hover">
                                            <th>2</th>
                                            <td>Dimensions</td>
                                            <td>20 × 30 × 40 cm</td>

                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>3</th>
                                            <td>Colors</td>
                                            <td>Black, Blue, Green</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>

                                <form onSubmit={handleSubmit} className="card-body">
                                    <div>
                                        <p>Add a review</p>
                                        <p>All fields marked with an asteris(*) are required</p>


                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Text</span>
                                        </label>
                                        <textarea
                                            name="text"
                                            className="textarea 
                                        textarea-bordered h-36 bg-gray-100" placeholder="Text Your Food" required></textarea>
                                    </div>

                                    <div className="md:flex gap-5">
                                        <div className="form-control w-full ">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="password" className="input input-bordered w-full bg-gray-100" required />

                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input
                                                name="email"
                                                type="email" placeholder="Email" className="input input-bordered w-full bg-gray-100" required />

                                        </div>
                                    </div>


                                    <div className="form-control mt-6">
                                        <input
                                            className="btn"
                                            type="submit" value="Comment Confirm" />
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </Container>
    );
};

export default OrderDetails;