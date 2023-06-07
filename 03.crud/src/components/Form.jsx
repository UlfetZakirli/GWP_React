import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from "uuid"
import axios from 'axios';
const MOVIE_API = 'http://localhost:7000/movies'

const Form = ({ movies, setMovies }) => {
    const [inputValue, setInputValue] = useState({
        Title: '',
        Year: '',
        Genre: '',
        Language: '',
        imdbRating: ''
    })

    const handlePost = async () => {
        const obj = {
            id: uuid(),
            ...inputValue
        }

        await axios.post(MOVIE_API, obj)
        setMovies([...movies, obj])

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue({
            Title: '',
            Year: '',
            Genre: '',
            Language: '',
            imdbRating: ''
        })
        handlePost()
        console.log('submited');


    }

    const disabeledBtn = inputValue.Title && inputValue.Year && inputValue.Language && inputValue.Language && inputValue.imdbRating

    return (
        <div >
            <h2 style={{ textAlign: 'center'}}>Movie Form</h2>
            <form className='movieForm' onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input value={inputValue.Title} onChange={(e) => setInputValue({ ...inputValue, Title: e.target.value })} type="text" id='title' placeholder='Enter a movie name...' />
                <label htmlFor="year">Year</label>
                <input value={inputValue.Year} onChange={(e) => setInputValue({ ...inputValue, Year: e.target.value })} type="text" placeholder='Enter a year...' id='year' />
                <label htmlFor="genre">Genre</label>
                <input value={inputValue.Genre} onChange={(e) => setInputValue({ ...inputValue, Genre: e.target.value })} type="text" placeholder='Enter a year...' id='genre' />
                <label htmlFor="language">Language</label>
                <input value={inputValue.Language} onChange={(e) => setInputValue({ ...inputValue, Language: e.target.value })} type="text" placeholder='Enter a year...' id='language' />
                <label htmlFor="imdb">Imdb</label>
                <input value={inputValue.imdbRating} onChange={(e) => setInputValue({ ...inputValue, imdbRating: e.target.value })} type="text" placeholder='Enter a year...' id='imdb' />
                <button disabled={!disabeledBtn} type='submit' className='btnForm'>Submit</button>
            </form>
        </div>

    )
}

export default Form