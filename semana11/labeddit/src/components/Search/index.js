import React, { useState, useContext } from 'react';

/*Contexts*/
import GlobalStateContext from "../../global/GlobalStateContext";

/*Icones*/
import { FaSearch } from 'react-icons/fa';

import {
  SearchContainer,
  SearchInput,
} from './styles'

export default function Search() {
  const { states, setters } = useContext(GlobalStateContext)
  const posts = states.allPosts
  const [textInput, setTextInput] = useState('')

  const onChangeInput = async (event) => {
    await setTextInput(event.target.value)

    searchingPosts(event.target.value)
  }


  const searchingPosts = (text) => {
    const searchText = text.toUpperCase()
    let foundPosts = []

    if(searchText !== '' || searchText !== ' ') {
      foundPosts = posts.filter(post => {
        return post.title.toUpperCase().includes(searchText) || post.text.toUpperCase().includes(searchText)
      })
  
      setters.setFilteredPosts(foundPosts)

      if (searchText.length > 0 && foundPosts.length === 0) {
        setters.setFilteredPosts([{
          id: 'Post not found', 
          username: 'Post not Found', 
          title: 'Post not Found', 
          text: 'Post not Found', 
          commentsCount: 'Post not Found'
        }])
      
      } 

    } else  {
      setters.setFilteredPosts([])
    }

  }

  return (
    <SearchContainer>
      <FaSearch size={"16px"} color={"#878A8C"} />
      <SearchInput
        value={textInput}
        placeholder={'Search'}
        onChange={onChangeInput}
      />
    </SearchContainer>
  )
}