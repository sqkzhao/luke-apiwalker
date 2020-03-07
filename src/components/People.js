import React from 'react'

const People = ({attributes}) => {
    return(
        <div>
            <h1>{attributes.name}</h1>
            <p><strong>Height: </strong>{attributes.height}</p>
            <p><strong>Hair Color: </strong>{attributes.hair_color}</p>
            <p><strong>Eye Color: </strong>{attributes.eye_color}</p>
            <p><strong>Skin Color: </strong>{attributes.skin_color}</p>
        </div>
    )
}
export default People