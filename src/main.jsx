import React, {useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import './main.scss'
import {initializeDonuts} from './components/GameInfo/Donut/donut.js'
import {GameInfo} from "./components/GameInfo/GameInfo.jsx";
import Overlay from "./components/Overlay/Overlay.jsx";

function App() {
    useEffect(() => {
        initializeDonuts();
    }, []);

    return (
        <>
            <GameInfo/>
            <Overlay/>
        </>
    );
}
createRoot(document.getElementById('app')).render(<App/>)
