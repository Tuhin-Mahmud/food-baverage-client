import food1 from '../../assets/images/newfoods/food3.jpg.jpg'
import food2 from '../../assets/images/newfoods/food4.jpg.jpg'
import food3 from '../../assets/images/newfoods/food2.jpg.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const CategorySlider = () => {
    return (
        <div className=''>

            <Swiper
            >
                <SwiperSlide>
                    <img className='w-full md:h-[500px] h-[200px] rounded-lg' src={food1} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full md:h-[500px] h-[200px] rounded-lg' src={food2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full md:h-[500px] h-[200px] rounded-lg' src={food3} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CategorySlider;