import React from 'react'
import "./Pin.scss"
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'


function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`} className=' title '>{item.title}</Link>
                        <span>{item.bedroom}</span>
                        <b>₦ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin