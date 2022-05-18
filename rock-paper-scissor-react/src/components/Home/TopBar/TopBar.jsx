import { useEffect, useState } from 'react';
import './topbar.css';


const TopBar = ({ score }) => {
    return (
        <div className="topbar-container">
            <div className="topbar-text">
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSORS</p>
            </div>
            <div className="topbar-score">
                <p className="score">SCORE</p>
                <p className="points">{score}</p>
            </div>
        </div>
    )
}

export default TopBar;