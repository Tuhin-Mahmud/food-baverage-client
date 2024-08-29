import food0 from '../../../assets/images/newfoods/food0.jpg.jpg'
import food1 from '../../../assets/images/newfoods/food1.jpg.jpg'
import food2 from '../../../assets/images/newfoods/food2.jpg.jpg'
import food3 from '../../../assets/images/newfoods/food3.jpg.jpg'
import food4 from '../../../assets/images/newfoods/food4.jpg.jpg'
// import food5 from '../../../assets/images/newfoods/food5.jpg.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const NewFoods = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-4xl text-orange-500 font-bold mb-3 text-center'>Our New Foods</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                // modules={[freeMode, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img className='w-full h-[300px] hover:scale-110 duration-500 transition object-cover' src={food0} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full  h-[300px] hover:scale-110
                    duration-500  transition object-cover' src={food3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[300px] hover:scale-110 duration-500 transition object-cover' src={food4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[300px] hover:scale-110 duration-500 transition object-cover' src={food1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[300px] hover:scale-110 duration-500 transition object-cover' src={food2} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default NewFoods;