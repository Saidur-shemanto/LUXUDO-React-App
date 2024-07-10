import { Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const PropertyIndiv = ({ property }) => {

    console.log(property)
    return (

        <div className=" card bg-base-100 w-96 shadow-xl">
            <figure className="h-52">
                <img
                    src={property.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {property.segment_name}
                    <div className="badge bg-black text-white">For {property.status}</div>
                </h2>
                <p>{property.estate_title}</p>
                <div className="card-actions ">
                    <div className="flex justify-center items-center font-semibold "><CiLocationOn style={{ strokeWidth: "1" }} />{property.location} </div>

                </div>
                <div className="mx-auto">
                    <Link to={`properties/${property.id}`}><button className="btn">View Details</button></Link>

                </div>

            </div>
        </div>
    )
};

export default PropertyIndiv;
