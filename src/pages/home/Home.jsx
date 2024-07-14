
import frontDoor from "../../assets/frontDoor.jpg"
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdVilla } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import Banner from "./banner/Banner";
import BannerText from "./banner/bannerText";
import PropertyCard from "./propertyCard/PropertyCards";
import BulletInfo from "./bulletInfo/BulletInfo";
import BulletInfoImage from "./bulletInfo/BulletInfoImage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])



    return (
        <div className="mx-auto container space-y-20">
            <div className="flex lg:flex-row flex-col-reverse ">
                <BannerText></BannerText>
                <Banner></Banner>

            </div>
            <div className="flex flex-col lg:flex-row gap-10">
                <img src={frontDoor} alt="" className="w-full lg:w-1/2 rounded-2xl" data-aos="fade-right" data-aos-delay="200" />
                <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left" data-aos-delay="200">
                    <p>Our services</p>
                    <h1 className="text-6xl font-bold">How we can help you!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero ipsam asperiores sed odio, qui corporis reiciendis reprehenderit dolor consectetur exercitationem fuga quae nobis sit harum cupiditate molestias ducimus aut?</p>
                    <div className="flex justify-between">
                        <div data-aos="fade-up" data-aos-delay="400">
                            <FaUmbrellaBeach size={50}></FaUmbrellaBeach>
                            <p className="font-bold text-lg ">Buy Beach House</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil quisquam blanditiis impedit magni obcaecati aperiam eum similique ullam? Pariatur!</p>

                        </div>
                        <div data-aos="fade-up" data-aos-delay="500">
                            <MdVilla size={50}></MdVilla>
                            <p className="font-bold text-lg">Buy Villa</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil quisquam blanditiis impedit magni obcaecati aperiam eum similique ullam? Pariatur!</p>

                        </div>
                        <div data-aos="fade-up" data-aos-delay="600">

                            <GiIsland size={50}></GiIsland>
                            <p className="font-bold text-lg">Buy Island</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil quisquam blanditiis impedit magni obcaecati aperiam eum similique ullam? Pariatur!</p>

                        </div>
                    </div>
                </div>

            </div>
            <div>
                <PropertyCard></PropertyCard>
            </div>
            <div className="flex w-full flex-col lg:flex-row">
                <BulletInfo></BulletInfo>
                <BulletInfoImage></BulletInfoImage>

            </div>






        </div>
    )
};

export default Home;
