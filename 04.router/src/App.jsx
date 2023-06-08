import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Footer from './Footer'
import Header from './Header'
import About from './About'
import { Contact } from './Contact'
import Error from './Error'

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
