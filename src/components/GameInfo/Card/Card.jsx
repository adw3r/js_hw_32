import React from "react";
import './style.scss';
import {Donut} from "./TextInfo/Donut/Donut.jsx";
import {TextInfo} from "./TextInfo/TextInfo.jsx";
import {PicInfo} from "./PicInfo/PicInfo.jsx";


export function Card() {
    return <div className="card">
        <PicInfo/>
        <TextInfo/>
    </div>
}