import './AnimalItem.sass'
import { Link } from "react-router"
import { FaLocationDot, FaRulerCombined } from "react-icons/fa6";


export default function AnimalItem(props) {
    let cname = "animal-item"

    return (
        <li className={`${cname}`}>
            <img className={`${cname}__img`} src={props.data.image} alt="" />
            <div className={`${cname}__text-wrapper`}>
                <h2> <Link to={`/detail/${props.data.id}`}>{props.data.breed}</Link> </h2>
                <span div className={`${cname}__meta`}> 
                    <small className={`${cname}__meta-location`}> <FaLocationDot/> {props.data.location} </small>
                    <small className={`${cname}__meta-size`}> <FaRulerCombined/> {props.data.size} </small>
                </span>
                <p>{props.data.short_description}</p>
            </div>

        </li>
    )
}