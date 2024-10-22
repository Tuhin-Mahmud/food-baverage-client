import useBlogs from "../../../public/useBlogs";
import Container from "../../components/utils/Container";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Blogs = () => {
    const [blogs] = useBlogs()
    console.log(blogs);
    return (
        <Container>
            <div className="">
                <div className="text-center mb-3">
                    <h1 className="text-xl font-medium text-orange-500">TASTY AND CRUNCHY</h1>
                    <h1 className="text-xl md:text-4xl uppercase font-serif text-gray-600">Our Recent Blog Posts</h1>
                </div>
                {/*  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        blogs.map(item => (
                            <div key={item._id} className="">
                                <div className="card glass h-[490px]">
                                    <figure>
                                        <img
                                            className="h-[300px] w-full object-cover"
                                            src={item.image}
                                            alt="blogs card" />
                                    </figure>
                                    <h5 className="text-gray-500 px-5 ">{item.date}</h5>
                                    <Link to={`/blogDetails/${item._id}`}>
                                        <div className=" px-5 py-5 space-y-5">
                                            <h2 className="text-2xl hover:text-orange-500 duration-500 text-gray-600 font-bold">{item.name}</h2>
                                            <div className="border justify-start bg-orange-500 text-white px-2 py-2 w-2/5 text-center mt-auto">
                                                <button className="text-center  flex items-center  gap-3">Read Details <MdArrowOutward className="text-xl animate-pulse" />
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default Blogs;