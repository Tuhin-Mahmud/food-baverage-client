import { Link } from "react-router-dom";
import useBlogs from "../../../public/useBlogs";
import { FaCalendarAlt } from "react-icons/fa";

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
            <div>
                <h1 className="text-center text-orange-500 text-lg font-medium font-serif">Categories</h1>
                <div>
                    {
                        blogs.categories.map(category => console.log(category))
                    }
                </div>
            </div>
        </div>
    );
};

export default SideBlogOne;