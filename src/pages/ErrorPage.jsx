import { Link } from 'react-router-dom';
import errorImg from '../assets/images/login/error.jpg'
const ErrorPage = () => {
    return (
        <div className='my-auto mt-20'>
            <img className=' md:w-1/3 h-[300px] md:h-[400px] mx-auto items-center justify-center  object-cover ' src={errorImg} alt="" />
            <div className='text-center text-white text-lg mt-4 bg-orange-500 w-36 p-4 rounded mx-auto'>
                <Link className=' ' to='/'>Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;