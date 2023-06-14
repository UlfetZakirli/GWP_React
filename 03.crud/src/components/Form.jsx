import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({ handleInput, editingMovie }) => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        Title: editingMovie ? editingMovie.Title : '',
        Year: editingMovie ? editingMovie.Year : '',
        Genre: editingMovie ? editingMovie.Genre : '',
        Language: editingMovie ? editingMovie.Language : '',
        imdbRating: editingMovie ? editingMovie.imdbRating : ''
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue({
            Title: '',
            Year: '',
            Genre: '',
            Language: '',
            imdbRating: ''
        })
        handleInput(inputValue)
        navigate('/')
    }

    const handleInputChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const handleInputField = (label, placeholder, name) => (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                value={inputValue[name]}
                name={name}
                id={name}
                placeholder={placeholder}
                type='text'
                onChange={handleInputChange}
            />
        </>
    )

    const disabeledBtn = inputValue.Title && inputValue.Year && inputValue.Genre && inputValue.Language && inputValue.imdbRating

    return (
        <div >
            <h2 style={{ textAlign: 'center' }}>Movie Form</h2>
            <form className='movieForm' onSubmit={handleSubmit}>
                {handleInputField('Title', 'Eneter a title...', 'Title')}
                {handleInputField('Year', 'Eneter a year...', 'Year')}
                {handleInputField('Genre', 'Enter a genre...', 'Genre')}
                {handleInputField('Language', 'Enter a language...', 'Language')}
                {handleInputField('Imdb', 'Enter an imdb....', 'imdbRating')}
                <button disabled={!disabeledBtn} type='submit' className='btnForm'>{editingMovie ? 'Edit' : 'Submit'}</button>
            </form>
        </div>

    )
}

export default Form