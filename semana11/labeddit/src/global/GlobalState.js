import React, { useState } from "react";

/*Serviços*/
import api from '../services/api';

/*Context*/
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = () => {
    api.get('/posts', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      setAllPosts(response.data.posts)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const states = { allPosts };
  const setters = { setAllPosts };
  const requests = { getAllPosts };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;