import { useEffect } from "react"
import "./App.css"
import Cards from "./components/Cards"
import { useState } from "react"
const BASE_URL = 'https://jsonplaceholder.typicode.com/users'
import axios from "axios"

const App = () => {
  const [users, setUsers] = useState([])


  const getUsers = async () => {
    const res = await axios(BASE_URL)
    const data = res.data
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="App">
      <h1>App</h1>
      <Cards users={users} />
    </div>
  )
}

export default App


