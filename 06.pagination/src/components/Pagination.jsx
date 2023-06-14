import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ totalPage, handlePaginate, handlePrev, handleNext }) => {

    const page = [...Array(totalPage).keys()].map(num => num + 1)

    console.log(page[0]);
    // let a = 18
    // const arr = [...Array(a).keys()].map(num => num + 1)
    return (
        <div>
            <Link onClick={() => handlePrev(page)} className='btn btn-dark'><svg width={20} style={{ color: '#fff' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            </Link>
            {
                page.map((num) => (
                    <Link key={num} onClick={() => handlePaginate(num)} className='btn btn-dark'>{num}</Link>
                ))
            }
            <Link onClick={() => handleNext(page)} className='btn btn-dark'>
                <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>


            </Link>
        </div>
    )
}

export default Pagination