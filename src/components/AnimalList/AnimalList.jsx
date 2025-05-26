import './AnimalList.sass'
import AnimalItem from "./AnimalItem"

export default function AnimalList(props) {
    console.log(props)
    let cname = "animal-list"
 
    return (
        <ul className={cname}>
            {props.items.map((animal, index) => (<AnimalItem key={index} data={animal} />))}
        </ul>
    )
}