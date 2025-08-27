import React, {useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/style/style.scss'
import {initializeDonuts} from './utils/donut.js'
import {Tabs} from "./components/Tabs";
import {Card} from "./components/Card";

function App() {
    useEffect(() => {
        initializeDonuts();
    }, []);

    return (
        <>
            <div className="game-info">
                <Tabs/>
                <Card/>
            </div>
            <div className="overlay"></div>
        </>
    );
}
createRoot(document.getElementById('app')).render(<App/>)
