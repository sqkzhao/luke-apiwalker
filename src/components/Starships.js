import React from 'react'

const Starships = ({attributes}) => {
    return(
        <div>
            <h1>{attributes.name}</h1>
            <p><strong>Manufacturer: </strong>{attributes.manufacturer}</p>
            <p><strong>Cost in Credits: </strong>{attributes.cost_in_credits}</p>
            <p><strong>Length: </strong>{attributes.length}</p>
            <p><strong>Cargo Capacity: </strong>{attributes.cargo_capacity}</p>
        </div>
    )
}
export default Starships