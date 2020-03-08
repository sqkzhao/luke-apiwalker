import React from 'react'

const Planets = ({state, setState}) => {
    // if(state.category !== "planets"){
    //     setState({
    //         ...state,
    //         category: "planets",
    //         id: state.homeId,
    //         search: !state.search,
    //         homeId: ""
    //     })
    // }
    return(
        <div>
            <h1>{state.attributes.name}</h1>
            <p><strong>Climate: </strong>{state.attributes.climate}</p>
            <p><strong>Terrain: </strong>{state.attributes.terrain}</p>
            <p><strong>Surface Water: </strong>{state.attributes.surface_water}</p>
            <p><strong>Population: </strong>{state.attributes.population}</p>
        </div>
    )
}
export default Planets