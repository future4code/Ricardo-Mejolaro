import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useTripsDetails(url, params, token) {
  const [trip, setTrip] = useState({});

  useEffect(() => {
    axios.get(`${url}/${params}`, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        setTrip(response.data.trip)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [url, params, token])

  return trip;
}