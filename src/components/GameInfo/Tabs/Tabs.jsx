import React from "react";
import {BagIcon, InfoIcon, Spades} from "../../Icons.jsx";
import './style.scss';

const defaultInfo = "Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto. It is the sixth main installment in the Far Cry series and the successor Far Cry 5.";

const handleClick = (e) => {
    const container = e.currentTarget;
    const li = e.target.closest('li');
    if (!li || !container.contains(li)) return;
    container.querySelectorAll('li').forEach((el) => el.classList.remove('active'));
    li.classList.add('active');

    const label = li.querySelector('.text')?.textContent?.toLowerCase().trim();
    const infoEl = document.querySelector('.card .text-info .info');
    if (!infoEl) return;
    if (label === 'ratings info' || label === 'where to buy') {
        infoEl.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    } else if (label === 'information') {
        infoEl.textContent = defaultInfo;
    }
};

export function Tabs() {
    return (<ul className="tabs" onClick={handleClick}>
        <li className='active'>
            <InfoIcon/>
            <span className="text">Information</span>
        </li>
        <li>
            <Spades/>
            <span className="text">Ratings Info</span>
        </li>
        <li>
            <BagIcon/>
            <span className="text">where to buy</span>
        </li>
    </ul>);
}
