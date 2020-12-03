import {useState, useEffect} from 'react';
import api from '../services/api';

export default function useRequestData(url, type) {
  const [data, setData] = useState(type)

  useEffect(() => {
    api.get(url, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [url])

  return data;
}