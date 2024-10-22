import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import userImg from '../../assets/images/logo/user.jpg'
import 'react-tabs/style/react-tabs.css';
import { Rating } from "@smastrom/react-rating";

import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FcOk } from "react-icons/fc";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
// import { useEffect, useRef, useState } from "react";
import Container from "../../components/utils/Container";
import Swal from "sweetalert2";
import ProductCart from "../BrandProduct/ProductCart";
import useCarts from "../../hooks/useCarts";


const Comment = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()


    // post comment
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const text = form.text.value;
        const name = form.name.value;
        // const email = user.email;
        const userComment = {
            text,
            name,
            userImage: user?.photoURL,
            email: user?.email,
            // userImage
        }
        axiosPublic.post('/comment', userComment)
            .then(res => {
                console.log(res.data);
                refetch()
                if (res.data.insertedId) {
                    toast.success('comment successfully')
                }
            })

    }


    // read comment
    const { data: comment = [], refetch } = useQuery({
        queryKey: ['comment',],
        queryFn: async () => {
            const res = await axiosPublic.get(`/comment`)

            return res.data;
        }
    })



    return (
        <div>

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
                            {/* <p>{description}</p> */}
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
                            {/* comment */}
                            <div className="space-y-4 mt-3">
                                {
                                    comment.map(com => (
                                        <div key={com._id} >
                                            <div className="flex items-center justify-between ">
                                                <div>
                                                    <div className="flex items-center gap-4">
                                                        <img src={com?.userImage ? com?.userImage : userImg} className=" w-20 h-20 rounded-full" alt="" />
                                                        <div className="">
                                                            <h1 className="text-xl font-semibold">{com.name}</h1>
                                                            <p className="text-sm  text-gray-600">{com.localTime}</p>
                                                            <p className="text-gray-600">{com.text} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    {/* <Rating
                                                        style={{ maxWidth: 80 }}
                                                        value={rating}
                                                        readOnly
                                                    /> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
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
    );
};

export default Comment;