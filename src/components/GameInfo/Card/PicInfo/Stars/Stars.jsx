import React from "react";
import './style.scss';

export function Stars({value = 4.5, max = 5, size = 18}) {
    return <div className="stars" data-value={value} data-max={max} data-size={size}></div>;
}
