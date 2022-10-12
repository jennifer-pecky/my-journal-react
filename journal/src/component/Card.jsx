import React from "react";
import image from "../image/location.png"

export default function Card(props) {
    return (
        <div className="card-wrapper">
            <div className="card">
                <img src={props.item.coverImg} alt="" className="card-image" />
                <div className="card--stats">
                    <img src={image} alt="" className="loca" />
                    <span className="gray1">{props.item.location}</span>
                    <span className="gray">{props.item.reviewCount}</span>
                    <h1 className="card-head">{props.item.head}</h1>
                    <p className="card-rate">{props.item.rating}</p>
                    <p className="card-review">{props.item.title}</p>
                </div>
            </div>
        </div>

    )
}