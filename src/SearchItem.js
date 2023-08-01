import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
<form className='searchFor mb-5'  onSubmit={(e) => e.preventDefault()}  >
    
    <input id='search'

    type='text'
    role='searchbox'
    placeholder='Search Items'
    className=' flex-1 rounded-l-md w-full px-4 py-2 border'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    
    />


</form>

    )
}

export default SearchItem