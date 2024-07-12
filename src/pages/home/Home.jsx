
import frontDoor from "../../assets/frontDoor.jpg"
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdVilla } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import Banner from "./banner/Banner";
import BannerText from "./banner/bannerText";
import PropertyCard from "./propertyCard/PropertyCards";
import BulletInfo from "./bulletInfo/BulletInfo";
import BulletInfoImage from "./bulletInfo/BulletInfoImage";

const Home = (props) => {
    return (
        <div className="mx-auto container">
            <div className="flex">
                <BannerText></BannerText>
                <Banner></Banner>

            </div>
            <div className="flex">
                <img src={frontDoor} alt="" className="w-1/2 rounded-2xl" />
                <div className="w-1/2">
                    <p>Our services</p>
                    <h1 className="text-6xl font-bold">How we can help you!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero ipsam asperiores sed odio, qui corporis reiciendis reprehenderit dolor consectetur exercitationem fuga quae nobis sit harum cupiditate molestias ducimus aut?</p>
                    <div className="flex justify-between">
                        <div>
                            <FaUmbrellaBeach size={50}></FaUmbrellaBeach>
                            <p className="font-bold text-lg max-w-[9ch]">Buy Beach House</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil quisquam blanditiis impedit magni obcaecati aperiam eum similique ullam? Pariatur!</p>

                        </div>
                        <div>
                            <MdVilla size={50}></MdVilla>
                            <p className="font-bold text-lg">Buy Villa</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil quisquam blanditiis impedit magni obcaecati aperiam eum similique ullam? Pariatur!</p>

                        </div>
                        <div>

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
            <div className="flex w-full">
                <BulletInfo></BulletInfo>
                <BulletInfoImage></BulletInfoImage>

            </div>






        </div>
    )
};

export default Home;
