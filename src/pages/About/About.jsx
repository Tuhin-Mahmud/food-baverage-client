import about from '../../assets/images/about/about.jpg'
import { FaBowlFood } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import Container from '../../components/utils/Container';
const About = () => {
    return (
        <Container>
            <div className=" my-7">
                <div className=' flex flex-col lg:flex-row gap-3'>
                    <div className="lg:w-1/2 p-8">
                        <img className='rounded-lg' src={about} alt="" />
                    </div>
                    <div className="lg:w-1/2 p-4">
                        <h2 className=" text-xl font-bold text-orange-500">About Us</h2>
                        <h1 className='text-3xl md:text-6xl font-serif font-medium my-3'>Delicia&apos;s about fresh <br /> flavorful dining</h1>
                        <p className='text-gray-500'>We are passionate about serving fresh, flavorful dishes crafted with the finest ingredients. Every meal is thoughtfully prepared to deliver a memorable dining experience you&apos;ll love.</p>
                        {/*  */}
                        <div className='flex items-center   lg:flex-row gap-5 my-5'>
                            <div className='flex  items-center  justify-center bg-gray-300 p-2 md:w-2/5 rounded-lg'>
                                <FaBowlFood className='text-3xl mr-3 text-orange-400' />

                                <h4>
                                    <p className='font-bold md:text-lg'>1500+</p>
                                    <p className='text-stone-500'>Total Food Item</p>
                                </h4>
                            </div>
                            <div className='flex  items-center  justify-center bg-gray-300 p-2 md:w-2/5 rounded-lg'>
                                <FaHome className='text-3xl mr-3 text-orange-400' />

                                <h4>
                                    <p className='font-bold md:text-lg'>500+</p>
                                    <p className='text-stone-500'>Branch office</p>
                                </h4>
                            </div>

                        </div>
                        <div className='flex items-center justify-center md:justify-start'>
                            <h1 className='bg-orange-500 md:w-1/4 p-1 md:p-3 rounded-lg text-white text-center text-lg md:text-xl hover:bg-black duration-500 transition  '>Read More..</h1>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;