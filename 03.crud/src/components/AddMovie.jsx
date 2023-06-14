import React from 'react'
import Form from './Form';
import { v4 as uuid } from "uuid"
import axios from 'axios';
const MOVIE_API = 'http://localhost:7000/movies'

const AddMovie = ({ movies, setMovies }) => {

    const handlePost = async (inputValue) => {
        const obj = {
            id: uuid(),
            ...inputValue
        }
        await axios.post(MOVIE_API, obj)
        setMovies([...movies, obj])
    }

    return (
        <div>
            <Form movies={movies} setMovie={setMovies} handleInput={handlePost} />
        </div>
    )
}

export default AddMovie