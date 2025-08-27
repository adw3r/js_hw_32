import React from "react";
import fc6_image from "../assets/images/far-cry-6.jpg";

function PicInfo() {
    return <div className="pic-info" >
        <div className="img-wrap">
            <img src={fc6_image} alt="FarCry 6"/>
        </div>
        <div className="stars"></div>
    </div>;
}

function TextInfo() {
    return <div className="text-info">
        <div className="description">
            <span className="title">FarCry 6</span>
            <span className="release">First Released Oct 6, 2021</span>
            <span className="info">
                  Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto.
                  It is the sixth main installment in the Far Cry series and the successor Far Cry 5.
                </span>
            <div className="score">
                <div className="donut" data-rating="8.7" data-scale="10"></div>
            </div>
        </div>
        <div className="to-buy">
            <button className="buy">Buy it now</button>
        </div>
    </div>;
}

export function Card() {
    return <div className="card">
        <PicInfo />
        <TextInfo/>
    </div>
}