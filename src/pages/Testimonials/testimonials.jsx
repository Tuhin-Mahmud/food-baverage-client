import { useEffect } from "react";
import { useState } from "react";
import Container from "../../components/utils/Container";
import { FaQuoteLeft } from "react-icons/fa";
import './testimonials.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('../../../public/review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    // ------------------------------


    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? reviews.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === reviews.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider, nextSlider]);

    const isSmallScreen = window.innerWidth <= 768;
    return (
        <Container>
            <div className="text-center mb-2">
                <h3 className="font-bold text-orange-600">Our Client Say</h3>
                <h1 className="text-2xl md:text-4xl capitalize font-serif">Our Customers Testimonials </h1>
            </div>
            <div className="bg-testimonials border ">

                <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24 ">
                    <div className="relative overflow-hidden ">
                        <div className=" absolute w-full h-full flex items-center justify-between z-50 px-5 ">
                            {/* arrow left */}
                            <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                                </svg>
                            </button>
                            {/* arrow right */}
                            <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                                </svg>
                            </button>
                        </div>
                        {/* slider container */}
                        <div
                            className="ease-linear  duration-300 flex"
                            style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
                            {/* sliders */}
                            {reviews.map((each, idx) => (
                                <div key={idx} className="p-4 min-w-full md:min-w-[50%] ">
                                    <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-white">

                                        <FaQuoteLeft className="text-3xl text-gray-500" />
                                        <p className="leading-relaxed mb-6 text-gray-500">{each?.details}</p>
                                        <a className="inline-flex items-center">
                                            <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={each.img} alt="customer img" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-gray-900">{each.name}</span>
                                                <span className="text-gray-500 text-sm">{each?.designation}</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </div >
            </div >

        </Container >
    );
};

export default Testimonials;