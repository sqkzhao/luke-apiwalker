import React from 'react'

const Vehicles = ({attributes}) => {
    return(
        <div>
            <h1>{attributes.name}</h1>
            <p><strong>Manufacturer: </strong>{attributes.manufacturer}</p>
            <p><strong>Length: </strong>{attributes.length}</p>
            <p><strong>Max Atmosphering Speed: </strong>{attributes.max_atmosphering_speed}</p>
            <p><strong>Crew: </strong>{attributes.crew}</p>
        </div>
    )
}
export default Vehicles