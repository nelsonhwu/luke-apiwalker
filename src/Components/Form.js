import React, { useState } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';

const Form = props => {

    const [searchType, setSearchType] = useState("people");
    const [searchTypeID, setSearchTypeID] = useState();
    const [searchResult, setSearchResult] = useState({});

    const url = "http://swapi.dev/api/" + searchType + "/" + searchTypeID;

    const FormSubmission = e => {
        e.preventDefault();

        console.log(e);
        console.log(searchType);
        console.log(searchTypeID);
        
        axios.get(url)
            .then(response => {
                setSearchResult(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div>
                <h1>Search for: </h1>
                <form onSubmit={FormSubmission}>
                    <select onChange={ e => setSearchType(e.target.value)}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
            

                    <label htmlFor="">id</label>
                    <input type="text" onChange={ e=> setSearchTypeID(e.target.value)}/>


                    <input type="submit" value="Search"/>

                </form>
            </div>
            
            <div>
                {
                    searchType === "people" ?
                    <>
                        <p>Name: {searchResult.name}</p>
                        <p>Hair Color: {searchResult.hair_color}</p>
                        <p>Eye Color: {searchResult.eye_color}</p>
                        <p>Height: {searchResult.height}</p>
                    </>
                    :
                    ""
                }

                {
                    searchType === 'films' ?
                    <>
                        <p>Title: {searchResult.title}</p>
                        <p>Release Date: {searchResult.release_date}</p>
                        <p>Episode ID: {searchResult.episode_id}</p>
                        <p>Director: {searchResult.director}</p>
                    </>
                    :
                    ""
                }

                {
                    searchType === 'starships' ?
                    <>
                        <p>Name: {searchResult.name}</p>
                        <p>Model: {searchResult.model}</p>
                        <p>Cost: {searchResult.cost_in_credits}</p>
                        <p>Hyperdrive Rating: {searchResult.hyperdrive_rating}</p>
                    </>
                    :
                    ""
                }

                {
                    searchType === 'vehicles' ?
                    <>
                        <p>Name: {searchResult.name}</p>
                        <p>Model: {searchResult.model}</p>
                        <p>Cost: {searchResult.cost_in_credits}</p>
                        <p>Max Passengers: {searchResult.passengers}</p>
                    </>
                    :
                    ""
                }

                {
                    searchType === 'species' ?
                    <>
                        <p>Name: {searchResult.name}</p>
                        <p>Average Height: {searchResult.average_height}</p>
                        <p>Average Lifespan: {searchResult.average_lifespan}</p>
                        <p>Classification: {searchResult.classification}</p>
                    </>
                    :
                    ""
                }

                {
                    searchType === 'planets' ?
                    <>
                        <p>Name: {searchResult.name}</p>
                        <p>Population: {searchResult.population}</p>
                        <p>Gravity: {searchResult.gravity}</p>
                        <p>Climate: {searchResult.climate}</p>
                    </>
                    :
                    ""
                }
            </div>
        </>
    )
}

export default Form;