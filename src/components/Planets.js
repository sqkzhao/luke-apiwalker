import React from 'react'

const Planets = ({attributes}) => {
    return(
        <div>
            <h1>{attributes.name}</h1>
            <p><strong>Climate: </strong>{attributes.climate}</p>
            <p><strong>Terrain: </strong>{attributes.terrain}</p>
            <p><strong>Surface Water: </strong>{attributes.surface_water}</p>
            <p><strong>Population: </strong>{attributes.population}</p>
        </div>
    )
}
export default Planets