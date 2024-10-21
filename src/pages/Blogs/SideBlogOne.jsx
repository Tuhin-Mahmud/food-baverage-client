import { Link } from "react-router-dom";
import useBlogs from "../../../public/useBlogs";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const SideBlogOne = () => {
    const [blogs] = useBlogs()
    console.log(blogs.categories);
    return (
        <div>
            {/* search bar */}
            <div className="join bg-gray-300 py-5 px-5">
                <input className="input w-2/3 input-bordered bg-white join-item focus-visible:outline-none" placeholder="Email" />
                <button className="btn join-item rounded-r-full">Search</button>
            </div>
            {/* --image and name-- */}
            <div className="bg-gray-100 py-4">
                <h1 className="text-center text-orange-500 text-lg font-medium font-serif">Recent Post</h1>

                <div>
                    {
                        blogs.map(blog => <Link
                            to={`/blogDetails/${blog._id}`}
                            key={blog._id}>
                            <div className="flex items-center gap-3 mt-4">
                                <img className="w-24 h-24 object-cover rounded" src={blog.subImg} alt="" />
                                <div className="text-gray-600 ">
                                    <h1 className="text-sm hover:text-orange-500">{blog.subName}</h1>
                                    <p className="flex items-center gap-1 text-sm"><FaCalendarAlt />{blog.date}</p>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>

            {/* categories */}
            <div className="bg-gray-100 mt-5 py-7 px-16 text-gray-600">
                <h1 className=" text-orange-500 text-lg font-medium font-serif">Categories</h1>
                <div>
                    {/* {
                        blogs.categories.map(category => console.log(category))
                    } */}
                    <div className="flex flex-col space-y-5 ">
                        <Link className="flex items-center gap-2 hover:underline"><FaArrowRight className="" /> Lunch Specials</Link>

                        <Link className="flex items-center gap-2 hover:underline"><FaArrowRight className="" /> Seasonal Dishes</Link>
                        <Link className="flex items-center gap-2 hover:underline"><FaArrowRight className="" /> Soup and salads</Link>
                        <Link className="flex items-center gap-2 hover:underline"><FaArrowRight className="" /> Steaks and chops</Link>
                        <Link className="flex items-center gap-2 hover:underline"><FaArrowRight className="" /> UnCategorize</Link>
                    </div>
                </div>
            </div>
            {/* gallery */}
            <div className="mt-10 ">
                <h1 className="text-center mb-3 text-orange-500 text-lg font-medium font-serif">Gallery</h1>
                <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
                    {
                        blogs.map(blogImg => (
                            <div key={blogImg._id}>
                                <img
                                    className="h-24 w-24  object-cover hover:scale-105 duration-500 transition"
                                    src={blogImg.image} alt="" />
                                <div className="mt-2 ">
                                    <img className="h-24 w-24  object-cover hover:scale-105 duration-500 transition" src={blogImg.subImg} alt="" />
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
            {/* tags */}
            <div className="bg-gray-200 mt-7 py-8 px-2">
                <h1 className="text-orange-500 text-lg font-medium font-serif text-center">Tags</h1>
                <div className="flex items-center justify-evenly">
                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Culinary</p>
                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Dishes</p>
                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Family</p>

                </div>
                <div className="flex items-center mt-3 justify-around">
                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Food</p>
                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Health</p>

                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Life</p>

                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Merida</p>
                </div>
                <div className="flex items-center mt-3 justify-around">
                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">Restaurant</p>
                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">solution</p>

                    <p className="bg-white px-3 py-1 rounded-xl text-gray-600 ">training</p>

                </div>
            </div>
        </div>
    );
};

export default SideBlogOne;