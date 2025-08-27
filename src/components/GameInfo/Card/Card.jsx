import React from "react";
import fc6_image from "/images/far-cry-6.jpg";
import './style.scss';
import {Donut} from "../Donut/Donut.jsx";
import {TextInfo} from "./TextInfo/TextInfo.jsx";
import {PicInfo} from "./PicInfo/PicInfo.jsx";




export function Card() {
    return <div className="card">
        <PicInfo/>
        <TextInfo/>
    </div>
}