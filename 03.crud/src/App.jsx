
import Header from './components/Header';
import "./App.css"
import { useEffect } from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import axios from 'axios';
import { Route, Routes } from "react-router-dom"
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import Error from './components/Error';

const MOVIE_API = 'http://localhost:7000/movies'

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const res = await axios.get(MOVIE_API)
    const data = res.data
    setMovies(data)
  }
  useEffect(() => {
    getMovies()
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MoviesList movies={movies} setMovies={setMovies} />} />
        <Route path='/addMovie' element={<AddMovie movies={movies} setMovies={setMovies} />} />
        <Route path='/editMovie/:id' element={<EditMovie movies={movies} setMovies={setMovies} />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  )
}

export default App
