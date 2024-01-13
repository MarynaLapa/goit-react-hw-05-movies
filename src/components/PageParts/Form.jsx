import React, { useEffect, useState } from 'react'
import { ReactComponent as Search } from 'components/icon/search.svg'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;

  input {
    display: inline-block;
    width: 400px;
    font-family: inherit;
    font-size: 20px;
    border: 1px solid rgba(218, 142, 2, 0.863);
    outline: none;
    border-radius: 4px;
    padding: 8px 4px;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-width: 48px;
    min-height: 48px;
    border: 2px solid rgba(218, 142, 2, 0.863);
    border-radius: 8px;
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    background-color: rgb(34, 15, 15);
    color: rgba(218, 142, 2, 0.863);
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;

    &:hover,
    &focus {
      opacity: 0.6;
      border: 1px solid white;
    }
  }
`
const Form = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const handlerSearch = ({ target: { value } }) => {
    setSearchQuery(value)    
  }
  
  const handlerSubmit = (e) => {
    e.preventDefault()
    setSearchParams({ search: searchQuery })
  }

  useEffect(() => {
		!searchQuery && setSearchQuery(searchParams.get('search'))
	}, [searchParams, searchQuery])

  return (
    <SearchForm onSubmit={handlerSubmit}>
      <input
        name='search'
        type="text"
        value={searchQuery}
        autoComplete="off"
        onChange={handlerSearch}
        autoFocus
        placeholder="Search movies..."
      />
      <button type="submit">
        Search
        <Search width='28' height='28' stroke="rgba(218, 142, 2, 0.863)"/>
      </button>
    </SearchForm>
  )
}

export default Form
