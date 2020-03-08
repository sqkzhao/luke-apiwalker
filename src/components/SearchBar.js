import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios'

const SearchBar = ({state, setState}) => {
    const onChangeHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        setState({
            ...state,
            search: !state.search,
        })
    }
    useEffect(() => {
        axios.get(`https://swapi.co/api/${state.category}/${state.id}/`)
            .then(response => {
                console.log(response.data)
                setState({
                    ...state,
                    attributes: response.data
                })
                navigate(`/${state.category}`)
            })
            .catch(error => {
                navigate('/home')
            })
    }, [state.search])
    return(
        <div>
            <form onSubmit={onSubmitHandler} className="form-row justify-content-center mt-5">
                <label className="col-1 col-form-label col-form-label-lg">Search for:</label>
                <select name="category" onChange={onChangeHandler} className="custom-select custom-select-lg col-2 mr-5">
                    <option value=""></option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                </select>
                <label className="col-form-label col-form-label-lg mr-2">Id:</label>
                <input type="number" name="id" onChange={onChangeHandler} className="col-1 form-control form-control-lg mr-5"/>
                <input type="submit" value="Search" className="btn btn-primary btn-lg"/>
            </form>
        </div>
    )    
}
export default SearchBar