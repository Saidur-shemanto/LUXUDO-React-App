import { IoLocationOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";

const PropertyListDetails = ({ property }) => {
    return (
        <div className="flex lg:flex-row flex-col w-full lg:w-3/5 rounded-2xl border-b-2 p-4 drop-shadow-lg gap-4 hover:border-blue-500 ">
            <img src={property.image} alt="" className="w-full lg:w-1/4 rounded-2xl" />
            <div className="w-full lg:w-3/4 space-y-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-center lg:text-start">{property.estate_title}</h1>
                    <IoIosHeartEmpty className="text-4xl"></IoIosHeartEmpty>
                </div>
                <p>{property.segment_name}</p>
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="flex lg:justify-start justify-between gap-8">


                        <div className="flex items-center">
                            <TbRulerMeasure color="black" size={30}></TbRulerMeasure>
                            <p className="font-semibold">{property.area}</p>
                        </div>
                        <div className="flex items-center">
                            <IoLocationOutline color="black" size={30}></IoLocationOutline>
                            <p className="font-semibold">{property.location}</p>
                        </div>
                    </div>

                    <div className="font-bold text-2xl text-center lg:text-start">
                        {property.price}
                    </div>
                </div>

            </div>


        </div>
    )
};

export default PropertyListDetails;
