import { useState, useEffect } from 'react';

import Header from '../../Components/Header/Header'

export default function AppContainer() {
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div>
      <Header black={blackHeader}/>
    </div>
  );
}