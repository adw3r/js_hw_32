import fc6_image from "/images/far-cry-6.jpg";
import React from "react";
import {Stars} from "./Stars/Stars.jsx";
import './style.scss';

export function PicInfo() {
    return <div className="pic-info">
        <div className="img-wrap">
            <img src={fc6_image} alt="FarCry 6"/>
        </div>
        <Stars value={4} max={5} size={25}/>
    </div>;
}