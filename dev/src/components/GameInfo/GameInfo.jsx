import {Tabs} from "./Tabs/Tabs.jsx";
import {Card} from "./Card/Card.jsx";
import React from "react";
import './style.scss';

export function GameInfo() {
    return <div className="game-info">
        <Tabs/>
        <Card/>
    </div>
}