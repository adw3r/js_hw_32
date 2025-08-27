import React from "react";
import {InfoIcon, BagIcon, Spades} from "../../Icons.jsx";
import './style.scss';

export function Tabs() {
    return (<ul className="tabs">
            <li>
                <InfoIcon/>
                <span className="text">Information</span>
            </li>
            <li>
                <Spades/>
                <span className="text">Information</span>
            </li>
            <li>
                <BagIcon/>
                <span className="text">Information</span>
            </li>
        </ul>);
}
