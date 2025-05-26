import { useEffect, useState } from 'react'
import './Detail.sass'
import pattern from '../assets/confetti.svg'
import { useParams, Link } from 'react-router'
import LoadingAnimation from '../components/LoadingAnimation/loadingAnimation'
import { FaLocationDot } from "react-icons/fa6";

export default function Detail() {
  let cname = 'detail'
  const params = useParams()

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:4000/dogs/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
      .finally(() => setTimeout(() => setIsLoading(false), 600))
  }, [])

  if (isLoading) {
    return (
      <LoadingAnimation />
    )
  }


  return (

    <div className='root-detail'>
      <div className={`${cname}__background`}>
        <img className={`${cname}__pattern`} src={pattern} alt="" />
        <img className={`${cname}__img`} src={data.image} alt="" />
      </div>
      <div div className={`${cname}__content`}>
        <h1 div className={`${cname}__content-title`}>{data.breed}</h1>
        <p div className={`${cname}__content-location`}><FaLocationDot className={`${cname}__location-icon`} /> {data.location}</p>
        <p div className={`${cname}__content-description`} >{data.long_description}</p>
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}
