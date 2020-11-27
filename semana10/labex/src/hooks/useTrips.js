import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useTrips(url, type) {
  const [trip, setTrip] = useState(type)

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setTrip(response.data.trips)
    })
    .catch(error => {
      console.log(error)
    })
  }, [url])

  return trip;
}