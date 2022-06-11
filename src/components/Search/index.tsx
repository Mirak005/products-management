import React from 'react'

import './index.css'

type Props = {
  searchText: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({ searchText, onChange = () => {} }) => {
  return (
    <div className='search-container'>
      <h1>Welcome !</h1>

      <input
        value={searchText}
        type='text'
        placeholder='🔍 Search a product'
        onChange={onChange}
      />
    </div>
  )
}

export default Search
