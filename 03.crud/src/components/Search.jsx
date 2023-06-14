
const Search = ({ setSearchPhrase }) => {
    return (
        <div className='search'>
            <input onChange={(e) => setSearchPhrase(e.target.value)} type="text" placeholder='Search to Name...' />
        </div>
    )
}

export default Search