import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-img"/>
            <div className="card-detail">
                <div className="card-detail-top">
                    <span><img src="../images/mapPin.png" /></span>
                    <span className="card-location">{props.location}</span>
                    <span><a href={props.googleMapsUrl} className="card-maps"> View on Google Maps </a></span>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-time">{props.startDate} - {props.endDate}</p>
                <p className="card-desc">{props.description}</p>
            </div>
        </div>
    )
}