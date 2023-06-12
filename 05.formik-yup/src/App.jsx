import React from 'react'
import "./App.css"
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="w-50">
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default App