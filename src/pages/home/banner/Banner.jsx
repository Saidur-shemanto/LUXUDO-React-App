import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay'
import villaImage from '../../../assets/beachHouse.jpeg'
import island from '../../../assets/privateIsland.jpg'
import resort from '../../../assets/resort.jpg'



const Banner = (props) => {
    return (
        <div className='w-1/2'>


            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
                effect="cube"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}



            >
                <SwiperSlide><div className='flex items-center justify-center'><img src={villaImage} className='h-[35rem]' alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='flex items-center justify-center'><img src={island} className='h-[35rem]' alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='flex items-center justify-center'><img src={resort} className='h-[35rem]' alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='flex items-center justify-center'><img src={villaImage} className='h-[35rem]' alt="" /></div></SwiperSlide>

            </Swiper>
        </div>
    )
};

export default Banner;
