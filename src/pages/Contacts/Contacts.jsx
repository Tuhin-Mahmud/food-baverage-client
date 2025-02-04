import work from '../../assets/images/newfoods/time-work.jpg.jpg'
import address from '../../assets/images/newfoods/location.jpg.jpg'
import contact from '../../assets/images/newfoods/contact.jpg.webp'
import Container from '../../components/utils/Container';

const Contacts = () => {


    return (
        <Container>
            <div className='bg-slate-100  p-10 rounded-lg '>
                <h1 className='text-xl md:text-4xl text-center '>Contact Us</h1>
                <h1 className=' mb-10 text-orange-500 md:text-center font-serif'>Need reservation? <br />booking your table now!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    <div className='flex   '>
                        <img className='w-[100px] h-[90px] rounded-xl' src={work} alt="" />
                        <div className='ml-5'>
                            <h4 className='text-lg font-bold'>Work Time</h4>
                            <h3>Monday-Friday</h3>
                            <h2>9:00am-10:00pm</h2>
                        </div>
                    </div>
                    <div className='flex items-cente'>
                        <img className='w-[100px] h-[90px] rounded-xl' src={contact} alt="" />
                        <div className='ml-5'>
                            <h5 className='text-lg font-bold'>Phone</h5>
                            <h1>+88093754639367</h1>
                            <h1>+880684673933</h1>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='w-[100px] h-[90px] rounded-xl' src={address} alt="" />
                        <div className='ml-5'>
                            <p className='text-lg font-bold'>Address</p>
                            <h1>LA,4567</h1>
                            <h2>Dhaka Uttara</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contacts;