import React from 'react'
import './App.css'
import { data } from './data/users'
import Table from './components/Table';
import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const App = () => {
  const [users, setUsers] = useState(data)
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false })
  const [searchPhrase, setSearchPhrase] = useState('')


  const handleSortById = () => {
    const copyData = [...users]
    // if (sorted) {
    //   copyData.sort((userA, userB) => userA.id - userB.id)
    //   setSorted(false)
    //   setUsers(copyData)
    // } else {
    //   copyData.sort((userA, userB) => userB.id - userA.id)
    //   setUsers(copyData)
    //   setSorted(true)
    // }
    copyData.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.id - userB.id
      } else {
        return userB.id - userA.id
      }
    })
    setSorted({ sorted: 'id', reversed: !sorted.reversed })
    setUsers(copyData)
  }

  const handleSortByFullName = () => {
    const copyArr = [...users]
    copyArr.sort((userA, userB) => {
      const fullNameA = `${userA.first_name} ${userA.last_name}`
      const fullNameB = `${userB.first_name} ${userB.last_name}`
      if (sorted.reversed) {
        return fullNameA.localeCompare(fullNameB)
      } else {
        return fullNameB.localeCompare(fullNameA)
      }
    })
    setSorted({ sorted: 'name', reversed: !sorted.reversed })
    setUsers(copyArr)
  }

  const handleArrowIcon = () => {
    if (sorted.reversed) {
      return <AiOutlineArrowUp style={{ color: 'green' }} />
      console.log('up');
    }
    return <AiOutlineArrowDown style={{ color: 'red' }} />
    console.log('down');
  }

  const handleSearch = (e) => {
    let filteredUsers = [...data];
    filteredUsers = filteredUsers.filter((user) => `${user.first_name} ${user.last_name}`.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setUsers(filteredUsers)
    setSearchPhrase(e.target.value)
  }

  return (
    <div className='container mt-5'>
      <input onChange={handleSearch} value={searchPhrase} type="search" placeholder='Search to Name...' className='form-control shadow-none mb-4' />
      <table className='table table-striped table-hover'>
        <thead className=''>
          <tr>
            <th onClick={handleSortById}>
              Id
              {sorted.sorted === 'id' ? handleArrowIcon() : null}
            </th>
            <th onClick={handleSortByFullName}>
              Full Name
              {sorted.sorted === 'name' ? handleArrowIcon() : null
              }
            </th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <Table key={user.id} user={user} />
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default App