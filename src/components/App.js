import React, { useEffect, useState } from "react";
import Tours from "./Tours";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const url = 'https://course-api.com/react-tours-project'

  const fetchTours = async () => {
    setLoading(true)
    try {
      const data = await fetch(url);
      const tours = await data.json()
      setTours(tours);
    }
    catch (error) {
      console.error('Failed to load tours', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (loading) {
    return (
      <main id='main'>
      <p className = 'loading'>Loading...</p>
    </main>
    )
    
  }

  if (tours.length === 0) {
    return (
      <main id='main'>
      <h2>No more tours to display</h2>
      <button onClick={fetchTours}>Refresh</button>
    </main>
    )
  }
    return(
      <main id="main">
          <h1 className='title'>Our Tours</h1>
          {tours.map((tour) => (
  <Tours key={tour.id} {...tour} removeTour={removeTour} />
))}
          
      </main>
    )
}
export default App;
