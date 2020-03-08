import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router';
import axios from 'axios'

const People = ({state, setState}) => {
    const [homeworld, setHomeworld] = useState("")
    let url = state.attributes.homeworld
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setHomeworld(response.data.name)
                let id = url.charAt(url.length-2)
            })
    },[state.attributes])
    return(
        <div>
            <h1>{state.attributes.name}</h1>
            <p><strong>Height: </strong>{state.attributes.height}</p>
            <p><strong>Hair Color: </strong>{state.attributes.hair_color}</p>
            <p><strong>Eye Color: </strong>{state.attributes.eye_color}</p>
            <p><strong>Skin Color: </strong>{state.attributes.skin_color}</p>
            <p><strong>Homeword: </strong><Link to="/planets">{homeworld}</Link></p>
        </div>
    )
}
export default People