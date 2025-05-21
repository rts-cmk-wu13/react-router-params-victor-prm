import './AnimalList.sass'
import { useEffect, useState } from "react"
import AnimalItem from "./AnimalItem"
import LoadingAnimation from "../LoadingAnimation/loadingAnimation"

export default function AnimalList(props) {
    let cname = "animal-list"
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:4000/dogs')
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
        <ul className={cname}>
            {data.map((animal, index) => (<AnimalItem key={index} data={animal} />))}
        </ul>
    )
}