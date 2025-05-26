import './App.sass'
import AnimalList from '../components/AnimalList/AnimalList'
import Header from '../components/Header/Header'
import FilterButtons from '../components/FilterButtons/FilterButtons'
import LoadingAnimation from '../components/LoadingAnimation/loadingAnimation'
import { useState, useEffect } from 'react';


export default function App() {
  const [data, setData] = useState(null)
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/dogs')
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
      .finally(() => setTimeout(() => setIsLoading(false), 600))
  }, [])

  const filteredDogs = filter === 'all' ? data : data.filter(dog => dog.size === filter);


  if (isLoading) {
    return (
      <LoadingAnimation />
    )
  }

  return (
    <div className='root-app'>
      <Header />
      <FilterButtons onFilter={setFilter}></FilterButtons>
      <AnimalList items={filteredDogs} />
    </div>
  )
}
