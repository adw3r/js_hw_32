import fc6_image from "/images/far-cry-6.jpg";
import React from "react";

export function PicInfo() {
    return <div className="pic-info">
        <div className="img-wrap">
            <img src={fc6_image} alt="FarCry 6"/>
        </div>
        <div className="stars"></div>
    </div>;
}