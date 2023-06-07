import React from 'react'
import Movie from './Movie'
import axios from 'axios'
const MOVIE_API = 'http://localhost:7000/movies'

const MoviesList = ({ movies, setMovies }) => {

    const handleDeleteMovie = async (movieId) => {
        await axios.delete(`${MOVIE_API}/${movieId}`)
        const filteredId = movies.filter((movie) => movie.id !== movieId)
        setMovies(filteredId)
    }

    return (
        <div className='moviesList'>
            {
                movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} handleDeleteMovie={handleDeleteMovie} />
                ))
            }
        </div>
    )
}

export default MoviesList