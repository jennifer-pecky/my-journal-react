import React from "react";
import img from "../image/Fill 213.png"


export default function Navbar() {
    return (
        <div className="head">
            <img src={img} alt="" className="head--img" />
            <p className="head--para">my traveljournal</p>
        </div>
    )
}