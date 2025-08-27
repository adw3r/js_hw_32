import React from "react";
import {InfoIcon, BagIcon, Spades} from "./Icons";

export function Tabs(props) {
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
