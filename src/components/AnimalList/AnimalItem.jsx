import './AnimalItem.sass'
import { Link } from "react-router"

export default function AnimalItem(props) {
    let cname = "animal-item"

    return (
        <li className={`${cname}`}>
            <img className={`${cname}__img`} src={props.data.image} alt="" />
            <div className={`${cname}__text-wrapper`}>
                <h2> <Link to={`/detail/${props.data.id}`}>{props.data.breed}</Link> </h2>
                <small><i></i>{props.data.location}</small>
                <p>{props.data.short_description}</p>
            </div>

        </li>
    )
}