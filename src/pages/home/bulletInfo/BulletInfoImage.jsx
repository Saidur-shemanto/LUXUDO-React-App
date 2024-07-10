import image1 from '../../../assets/bulletPentaFirst.png'
import image2 from '../../../assets/bulletPentaSecond.png'
import image3 from '../../../assets/bulletPentaLast.png'
const BulletInfoImage = (props) => {
    return (
        <div className='w-full'>
            <img src={image1} alt="" className='absolute z-0 w-80 h-96' />
            <img src={image2} className='absolute z-10 w-64 h-72 right-[500px] top-[1700px] border-white border-8 rounded-lg' alt="" />
            <img src={image3} className='absolute z-20 w-44 h-52 left-[1080px] top-[1800px] border-8 rounded-lg border-white' alt="" />

        </div>
    )
};

export default BulletInfoImage;
