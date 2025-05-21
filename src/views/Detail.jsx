import { useEffect, useState } from 'react'
import './Detail.sass'
import { useParams } from 'react-router'
import LoadingAnimation from '../components/LoadingAnimation/loadingAnimation'

export default function Detail() {
  const params = useParams()
  console.log(params)

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:4000/dogs/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
      .finally(() => setTimeout(() => setIsLoading(false), 1000))
  }, [])

  if (isLoading) {
    return (
      <LoadingAnimation/>
    )
  }


  return (
    <>
      <h1>{data.breed}</h1>
      <img src={data.image} alt="" />
    </>
  )
}
