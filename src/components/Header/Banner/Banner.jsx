import { Link } from 'react-router-dom';
import './banner.css'
import { FaArrowRight } from 'react-icons/fa';
// import banner from '../../../assets/images/banner/banner.jpg'
const Banner = () => {
    return (
        <div className="hero h-[250px] lg:h-[450px] banner " style={{ backgroundImage: `` }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-2xl md:text-6xl font-serif font-medium capitalize">Enjoy our <span className='text-orange-500 font-extrabold'>delicius</span> food</h1>
                    <p className="mb-5">Halal Food for Muslims need to take the best possible care of their physical and spiritual health. One of the best ways to do this is by confirming that the food they use is pure,<span className='hidden lg:flex'> healthy and of good quality. Consumption of healthy food supports the overall metabolic function and immune system of the person. By using Halal food, the body’s overall health can be maintained.</span></p>
                    <div className='space-x-4'>
                        <Link to={'/reservation'}><button className='btn text-xl hover:bg-orange-400 transition duration-500'>Reservation <FaArrowRight className='animate-pulse' />
                        </button></Link>
                        <button className="btn btn-primary 
                        text-xl  h-12 before:absolute before:block before:inset-0 before:-z-10 before:bg-stone-700 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block
                        ">More Foods List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;