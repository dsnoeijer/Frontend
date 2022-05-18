import React, { useEffect, useContext } from 'react';
import { Context } from '../../Store/Store';
import { Link } from 'react-router-dom';
import TopBar from '../../Home/TopBar/TopBar';
import Icon from '../../Home/Icon/Icon';
import Button from '../Button/Button';
import Rules from '../../Home/Rules/Rules';
import rock from '../../../assets/img/icon-rock.svg';
import paper from '../../../assets/img/icon-paper.svg';
import scissors from '../../../assets/img/icon-scissors.svg';
import './game.css';


const Game = () => {
    const [state, dispatch] = useContext(Context);
    console.log(state);
    const { pick, symbol } = state.userPick;


    let cpuSymbol = '';
    const options = ['rock', 'paper', 'scissors'];
    const randomOption = Math.floor(Math.random() * 3);
    const computer = options[randomOption];


    if (computer === 'rock') {
        cpuSymbol = rock;
    } else if (computer === 'paper') {
        cpuSymbol = paper;
    } else {
        cpuSymbol = scissors;
    }

    useEffect(() => {
        const cpuDiv = document.querySelector('.cpu');
        const emptyDiv = document.querySelector('.empty-icon');
        const resultDiv = document.querySelector('.win-lose');
        const resultText = document.querySelector('.win-lose-text');

        setTimeout(() => {
            emptyDiv.style.display = 'none';
            cpuDiv.style.display = 'block';
        }, 2000);

        setTimeout(() => {
            resultText.innerHTML = '';
            let result = '';
            switch (true) {
                case (pick === computer):
                    result += '<p>TIE</p>';
                    break;
                case (pick === 'scissors' && computer === 'paper'):
                case (pick === 'paper' && computer === 'rock'):
                case (pick === 'rock' && computer === 'scissors'):
                    result += '<p>YOU WIN</p>';
                    dispatch({
                        type: 'SET_SCORE',
                        payload: state.score + 1
                    })
                    break;
                case (pick === 'rock' && computer === 'paper'):
                case (pick === 'scissors' && computer === 'rock'):
                case (pick === 'paper' && computer === 'scissors'):
                    result += '<p>YOU LOSE</p>';
                    dispatch({
                        type: 'SET_SCORE',
                        payload: state.score - 1
                    })
                    break;
                default:
                    return;
            }
            resultText.innerHTML += result;
            resultDiv.style.visibility = 'visible';
        }, 3000);
    })

    return (
        <div>
            <TopBar />
            <div className="results">
                <div className="game-results">
                    <Icon symbol={symbol} pick={pick} />
                    <div className="empty-icon">a</div>
                    <div className="cpu">
                        <Icon symbol={cpuSymbol} pick={computer} />
                    </div>
                </div>
                <div className="game-results-text">
                    <div className="user-pick">
                        YOU PICKED
                    </div>
                    <div className="cpu-pick">
                        THE HOUSE PICKED
                    </div>
                </div>
            </div>
            <div className="win-lose">
                <div className="win-lose-text">
                    <p></p>
                </div>
                <div className="win-lose-button">
                    <Link to="/"><Button /></Link>
                </div>
            </div>
            <div className='game-results-rules'>
                <Rules />
            </div>
        </div>
    )
}

export default Game;