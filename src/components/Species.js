import React from 'react'

const Species = ({attributes}) => {
    return(
        <div>
            <h1>{attributes.name}</h1>
            <p><strong>Classification: </strong>{attributes.classification}</p>
            <p><strong>Language: </strong>{attributes.language}</p>
            <p><strong>Average Lifespan: </strong>{attributes.average_lifespan}</p>
            <p><strong>Skin Color: </strong>{attributes.skin_colors}</p>
        </div>
    )
}
export default Species