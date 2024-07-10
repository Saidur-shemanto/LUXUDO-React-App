import { Link, useParams } from "react-router-dom";

const PropertyIndiv = ({ property }) => {

    console.log(property)
    return (

        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={property.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <Link to={`properties/${property.id}`}><button className="btn">View Details</button></Link>
            </div>
        </div>
    )
};

export default PropertyIndiv;
