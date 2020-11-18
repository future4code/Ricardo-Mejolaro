import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useTrips(url, type) {
  const [data, setData] = useState(type)

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setData(response.data.trips)
    })
    .catch(error => {
      console.log(error)
    })
  }, [url])

  return data;
}