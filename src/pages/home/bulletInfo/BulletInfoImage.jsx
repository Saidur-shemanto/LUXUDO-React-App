import image1 from '../../../assets/bulletPentaFirst.png'
import image2 from '../../../assets/bulletPentaSecond.png'
import image3 from '../../../assets/bulletPentaLast.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const BulletInfoImage = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div className='w-full relative lg:flex justify-center items-center hidden'>
            <img id='parent1' src={image1} alt="" className='absolute z-0 w-80 h-96  rounded-lg' data-aos="fade-up" />
            <img id='parent2' src={image2} className='absolute z-10 w-64 h-72 right-[220px] top-[270px] border-white border-8 rounded-lg' alt="" data-aos="fade-left" data-aos-delay="300" />
            <img src={image3} className='absolute z-20 w-44 h-52 left-[220px] top-[380px] border-8 rounded-lg border-white' alt="" data-aos="fade-right" data-aos-delay="500" />

        </div>
    )
};

export default BulletInfoImage;
