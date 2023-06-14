import React, { useState } from 'react'
import Movie from './Movie'
import axios from 'axios'
import Search from './Search'
const MOVIE_API = 'http://localhost:7000/movies'

const MoviesList = ({ movies, setMovies }) => {
    const [searchPhrase, setSearchPhrase] = useState('')

    const handleDeleteMovie = async (movieId) => {
        await axios.delete(`${MOVIE_API}/${movieId}`)
        const filteredId = movies.filter((movie) => movie.id !== movieId)
        setMovies(filteredId)
    }
    
    return (
        <div>
            <h2>Movies List</h2>
            <Search setSearchPhrase={setSearchPhrase} />
            <div className='moviesList'>
                {

                    movies
                        .filter((movie) => movie.Title.toLowerCase().includes(searchPhrase.toLowerCase()))
                        .map((movie) => (
                            <Movie key={movie.id} movie={movie} handleDeleteMovie={handleDeleteMovie} />
                        ))
                }
            </div>
        </div>
    )
}

export default MoviesList