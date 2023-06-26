import React from 'react'
import './App.css'
import Users from './components/Users'
import UserProvider from './context/UserContext'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div>
      <h4 className='text-center'>Context API</h4>
      <HelmetProvider>
        <UserProvider >
          <Routes>
            {/* <Route path='/' element={<App />} /> */}
            <Route path='/contact' element={<Contact />} />

          </Routes>
        </UserProvider>
      </HelmetProvider>
    </div>
  )
}

export default App