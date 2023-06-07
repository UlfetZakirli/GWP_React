import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [inputValue, setInputValue] = useState({
        name: '',
        surname: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue);
        setInputValue({
            name: '',
            surname: ''
        })
    }

    const disbaledBtn = !inputValue.name || !inputValue.surname

    return (
        <div>
            <div >
                <h2 style={{ textAlign: 'center' }}>Movie Form</h2>

                <form className='movieForm' onSubmit={handleSubmit}>
                    <label htmlFor="title">Name</label>
                    <input value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} type="text" id='title' placeholder='Enter a name...' />
                    <label htmlFor="year">Surname</label>
                    <input value={inputValue.surname} onChange={(e) => setInputValue({ ...inputValue, surname: e.target.value })} type="text" placeholder='Enter a surname...' id='year' />
                    <button disabled={disbaledBtn} type='submit' className='btnForm'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Form