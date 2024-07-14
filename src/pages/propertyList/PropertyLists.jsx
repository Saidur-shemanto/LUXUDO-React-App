import { useEffect, useState } from "react";
import PropertyListDetails from "./PropertyListDetails";

const PropertyLists = (props) => {
    const [properties, setProperties] = useState([])
    const [chosenMenu, setChosenMenu] = useState('all')
    useEffect(() => {
        fetch('propertyList.JSON')
            .then(result => result.json())
            .then(property => setProperties(property))

    }, [])

    const options = []
    let filteredProp = []
    for (let i of properties) {
        if (options.includes(i.segment_name)) {
            continue
        } else {
            options.push(i.segment_name)
        }

    }
    const handleChange = (event) => {
        setChosenMenu(event.target.value)
    }

    return (
        <div className="ml-0 lg:ml-20 w-full">
            <div className="flex flex-col w-full mb-4">
                <div className="flex w-full justify-center items-center gap-2">
                    <p className="font-semibold">Segment</p>
                    <select className="select select-bordered w-full max-w-xs " onChange={handleChange}>

                        <option value={'all'} selected>All</option>
                        {
                            options.map(u => <option value={u} key={u}>{u}</option>)
                        }
                    </select>

                </div>


            </div>


            <div className="space-y-6">
                {chosenMenu !== 'all' ?
                    properties.filter(prop => prop.segment_name === chosenMenu).map(prop => <PropertyListDetails property={prop}></PropertyListDetails>) : properties.map(prop => <PropertyListDetails property={prop}></PropertyListDetails>)

                }
            </div>


        </div>
    )
};

export default PropertyLists;
