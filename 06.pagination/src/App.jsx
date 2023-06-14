import { useEffect, useState } from 'react'
import './App.css'
import { BASE_URL } from './utils/api'
import Users from './components/Users';
import axios from 'axios';
import Pagination from './components/Pagination';
import { PAGINATE_PAGE } from './utils/constant';
import Loading from './components/Loading';

const App = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const getAllUsers = async () => {
    setLoading(true)
    try {
      const res = await axios.get(BASE_URL)
      const data = res.data
      setTotalPage(Math.ceil(data.length / PAGINATE_PAGE))
      setUsers(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  const handlePaginate = num => {
    setPage(num)
  }

  const handleNext = (nextNum) => {
    if (page < nextNum.length) {
      setPage(page + 1)
    } else {
      setPage(nextNum[0])
    }

  }

  const handlePrev = (maxPage) => {
    if (page > 1) {
      setPage(page - 1)
    } else {
      setPage(maxPage.length)
    }
  }

  return (
    <div className='container mt-5'>
      <h4>Page: {page}</h4>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <Users users={users} page={page} />
            <Pagination totalPage={totalPage} handleNext={handleNext} handlePrev={handlePrev} handlePaginate={handlePaginate} />
          </>

        )
      }

    </div>
  )

}

export default App