
import Header from './components/Header';
import "./App.css"
import { useEffect } from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import axios from 'axios';
import Form from './components/Form';

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
      <Form movies={movies} setMovies={setMovies} />
      <Header />
      <MoviesList movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default App
