import { useLoaderData } from "react-router-dom";
import Container from "../../components/utils/Container";
import { SlCalender } from "react-icons/sl";
import { FaQuoteLeft } from "react-icons/fa";
import SideBlogOne from "./SideBlogOne";


const BlogsDetails = () => {
    const { _id, image, name, date, description, subName, subImg, subDescription } = useLoaderData()

    return (
        <Container>
            <div className="min-h-screen">
                <h1 className="text-center text-gray-600 text-xl md:text-5xl uppercase my-3">Blog Details</h1>
                <div className="grid md:grid-cols-12 gap-4 px-5">
                    <div className="md:col-span-9 ">


                        {/* < div >
                                <img
                                    className=""
                                    src={subImg} alt="" />
                                <p className="flex gap-3  mt-2 items-center text-gray-600"><SlCalender className="text-lg" />{date}</p>
                                
                                <div className="">
                                    <h1 className="text-xl md:text-4xl capitalize">{subName}</h1>
                                    <p>{subDescription}</p>
                                    <br />
                                    <p>Welcome to Savor the Flavor, your go-to destination for all things delicious! Here, we celebrate the joy of cooking, eating, and discovering new flavors from around the world. From mouth-watering recipes and cooking tips to reviews of the best eateries, our blog is all about bringing culinary adventures straight to your kitchen. Whether you’re a seasoned chef or a home cook looking for inspiration, you&apos;ll find recipes that are easy to follow, along with stories that make each dish special. Join us as we explore the art of food, one bite at a time!</p>
                                    <br />
                                    <p>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                                    
                                    <div className="bg-black p-5 md:px-32 text-center text-white md:h-[200px] flex items-center hover:bg-orange-500 duration-500 transition my-2">
                                        <p><FaQuoteLeft className="relative right-0 bottom-5 md:text-4xl text-slate-500" /></p>
                                        <h1 className="text-gray-300">Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear.  Engrossed suffering supposing he recommend do eagerness.</h1>
                                    </div>
                                    
                                    <div className="text-gray-700 my-2">
                                        <h1 className="text-xl md:text-4xl capitalize">Conduct replied off led whether?</h1>
                                        <ul className="list-disc md:ml-5">
                                            <li>Pretty merits waited six</li>
                                            <li>
                                                General few civilly amiable pleased account carried.</li>
                                            <li>Continue indulged speaking</li>
                                            <li>Narrow formal length my highly</li>
                                            <li>Occasional pianoforte alteration unaffected impossible
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-gray-300 py-12 border-l-4 border-orange-500 flex items-center relative px-5">
                                        <p><FaQuoteLeft className=" bottom-5 md:text-5xl text-slate-400 flex absolute right-5" /></p>
                                        <h2>We offer discounted membership options for students and seniors <br /> who want to prioritize their health</h2>
                                    </div>
                                    <p>Our blog isn’t just about cooking; it&apos;s about the experience of food—how it brings people together, how it comforts us, and how it can spark joy. From street food adventures to fine dining experiences, from vegan treats to meaty feasts, we aim to inspire and excite your taste buds. Follow us on this delicious journey and savor every bite with The Flavor Chronicles!</p>
                                </div>
                            </div> */}

                        {/* : */}

                        <div>
                            <img
                                className="w-full pr-20"
                                src={image} alt="" />
                            <p className="flex gap-3  mt-2 items-center text-gray-600"><SlCalender className="text-lg" />{date}</p>
                            {/* content */}
                            <div className="">
                                <h1 className="text-xl md:text-4xl capitalize">{name}</h1>
                                <p>{description}</p>
                                <br />
                                <p>Welcome to Savor the Flavor, your go-to destination for all things delicious! Here, we celebrate the joy of cooking, eating, and discovering new flavors from around the world. From mouth-watering recipes and cooking tips to reviews of the best eateries, our blog is all about bringing culinary adventures straight to your kitchen. Whether you’re a seasoned chef or a home cook looking for inspiration, you&apos;ll find recipes that are easy to follow, along with stories that make each dish special. Join us as we explore the art of food, one bite at a time!</p>
                                <br />
                                <p>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                                {/* ------- */}
                                <div className="bg-black p-5 md:px-32 text-center text-white md:h-[200px] flex items-center hover:bg-orange-500 duration-500 transition my-2">
                                    <p><FaQuoteLeft className="relative right-0 bottom-5 md:text-4xl text-slate-500" /></p>
                                    <h1 className="text-gray-300">Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear.  Engrossed suffering supposing he recommend do eagerness.</h1>
                                </div>
                                {/* ------------ */}
                                <div className="text-gray-700 my-2">
                                    <h1 className="text-xl md:text-4xl capitalize">Conduct replied off led whether?</h1>
                                    <ul className="list-disc md:ml-5">
                                        <li>Pretty merits waited six</li>
                                        <li>
                                            General few civilly amiable pleased account carried.</li>
                                        <li>Continue indulged speaking</li>
                                        <li>Narrow formal length my highly</li>
                                        <li>Occasional pianoforte alteration unaffected impossible
                                        </li>
                                    </ul>
                                </div>
                                {/* ---------- */}
                                <div className="bg-gray-300 py-12 border-l-4 border-orange-500 flex items-center relative px-5">
                                    <p><FaQuoteLeft className=" bottom-5 md:text-5xl text-slate-400 flex absolute right-5" /></p>
                                    <h2>We offer discounted membership options for students and seniors <br /> who want to prioritize their health</h2>
                                </div>
                                <p>Our blog isn’t just about cooking; it&apos;s about the experience of food—how it brings people together, how it comforts us, and how it can spark joy. From street food adventures to fine dining experiences, from vegan treats to meaty feasts, we aim to inspire and excite your taste buds. Follow us on this delicious journey and savor every bite with The Flavor Chronicles!</p>
                            </div>

                        </div>



                    </div>
                    {/* right side bar */}
                    <div className="md:col-span-3  border">
                        <SideBlogOne />
                    </div>
                </div>
            </div>
        </Container >
    );
};

export default BlogsDetails;