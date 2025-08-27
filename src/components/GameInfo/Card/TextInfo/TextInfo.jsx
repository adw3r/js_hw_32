import React from "react";
import {Donut} from "../../Donut/Donut.jsx";
import './style.scss';

export function TextInfo() {
    return <div className="text-info">
        <div className="description">
            <span className="title">FarCry 6</span>
            <span className="release">First Released Oct 6, 2021</span>
            <span className="info">
                  Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto.
                  It is the sixth main installment in the Far Cry series and the successor Far Cry 5.
                </span>
            <Donut/>
        </div>
        <div className="to-buy">
            <div className="price-wrap">
                <span className='discount'>
                    20% OFF!
                </span>
                <span className="price">
                    $59.96
               </span>
            </div>
            <button className="buy">Buy it now</button>
        </div>
    </div>;
}
