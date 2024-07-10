import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = (props) => {
    const { id } = useParams()
    let properties = useLoaderData()
    properties = properties.find(property => property.id === id)
    console.log(properties)

    return (
        <div>
            {id}

        </div>
    )
};

export default PropertyDetails;
