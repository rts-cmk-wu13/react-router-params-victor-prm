import { useEffect, useState } from 'react';
import './Header.sass'
import { FaRegBell } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";




export default function Header() {
    let cname = 'header'

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4000/user`)
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
            .finally(() => setTimeout(() => setIsLoading(false), 600))
    }, [])


    return data ? (<header className={cname}>
        <button className={`${cname}__profile-btn`}><img className={`${cname}__profile-img`} src={data.image} alt="" /></button>
        <span className={`${cname}__location-wrapper`}>
            <FaLocationDot className={`${cname}__location-icon`} />
            <small className={`${cname}__location-text`}>{data.location}</small>
            <FaChevronDown className={`${cname}__location-chevron`}/>
        </span>
        <button className={`${cname}__notification-btn`}><FaRegBell className={`${cname}__notification-icon`} /></button>
    </header>) : ""


}