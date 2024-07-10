import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import PropertyIndiv from "./PropertyIndiv";

const PropertyCard = (props) => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        fetch('propertyList.JSON')
            .then(res => res.json())
            .then(data => setProperties(data))

    }, [])
    return (


        <Swiper
            modules={[Scrollbar, A11y, Autoplay]}
            slidesPerView={4}
            spaceBetween='100'
            autoplay={{
                disableOnInteraction: false,
                delay: 1000,
                pauseOnMouseEnter: true,
            }}




        >
            {properties.map(property => <SwiperSlide key={property.id}><PropertyIndiv property={property}></PropertyIndiv></SwiperSlide>)}


        </Swiper>


    )
};

export default PropertyCard;
