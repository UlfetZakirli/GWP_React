import React from 'react'
import Form from './Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const MOVIE_API = 'http://localhost:7000/movies'

const EditMovie = ({ movies, setMovies }) => {
    const { id } = useParams()

    const editingMovie = movies.find((movie) => movie.id === id)

    const handlePatch = async (inputValue) => {
        await axios.patch(`${MOVIE_API}/${id}`, inputValue)
        const index = movies.findIndex((movie) => movie.id === id)
        const moviesCopy = [...movies]
        moviesCopy.splice(index, 1, { ...inputValue, id })
        setMovies(moviesCopy)
    }

    return (
        <div>
            <Form editingMovie={editingMovie} movies={movies} setMovie={setMovies} handleInput={handlePatch} />
        </div>
    )
}

export default EditMovie