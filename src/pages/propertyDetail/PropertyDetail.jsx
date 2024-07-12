import { useLoaderData, useParams } from "react-router-dom";
import { IoPricetagOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import PropertyMap from "./PropertyMap";

const PropertyDetails = (props) => {
    const { id } = useParams()
    let properties = useLoaderData()
    properties = properties.find(property => property.id === id)
    console.log(properties)

    return (
        <div className="flex flex-col gap-10 justify-center items-center mb-10">
            <img className="w-1/2" src={properties.image} alt="" />
            <div className="flex items-center gap-8">
                <div>
                    <PropertyMap mapLocation={properties.location}></PropertyMap>

                </div>
                <div className="space-y-8">
                    <h1 className="text-5xl font-semibold">{properties.estate_title}</h1>
                    <p className="font-semibold text-lg">{properties.description}</p>
                    <p>Segment: <span className="rounded-2xl bg-black text-white p-2">#{properties.segment_name}</span></p>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <IoPricetagOutline size={30} color="black"></IoPricetagOutline>
                            </div>
                            <div className="stat-title">Price</div>
                            <div className="stat-value">{properties.price}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <TbRulerMeasure color="black" size={30}></TbRulerMeasure>

                            </div>
                            <div className="stat-title">Area</div>
                            <div className="stat-value">{properties.area}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <IoLocationOutline color="black" size={30}></IoLocationOutline>
                            </div>
                            <div className="stat-title">Location</div>
                            <div className="stat-value">{properties.location}</div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default PropertyDetails;
