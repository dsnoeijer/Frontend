import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import TopBar from '../../Home/TopBar/TopBar';
import Icon from '../../Home/Icon/Icon';
import Button from '../Button/Button';
import Rules from '../../Home/Rules/Rules';
import rock from '../../../assets/img/icon-rock.svg';
import paper from '../../../assets/img/icon-paper.svg';
import scissors from '../../../assets/img/icon-scissors.svg';
import './game.css';


const Game = () => {
    const [score, setScore] = useState(parseInt(localStorage.getItem('score')));
    const location = useLocation();
    const { pick, url, color } = location.state;
    let cpuSymbol = '', cpuColor = '';
    const options = ['rock', 'paper', 'scissors'];
    const randomOption = Math.floor(Math.random() * 3);
    const computer = options[randomOption];

    if (computer === 'rock') {
        cpuSymbol = rock;
        cpuColor = '#dd4157';
    } else if (computer === 'paper') {
        cpuSymbol = paper;
        cpuColor = '#5470ed';
    } else {
        cpuSymbol = scissors;
        cpuColor = '#eda626';
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
                    setScore(score + 1);
                    localStorage.setItem('score', score + 1);
                    break;
                case (pick === 'rock' && computer === 'paper'):
                case (pick === 'scissors' && computer === 'rock'):
                case (pick === 'paper' && computer === 'scissors'):
                    result += '<p>YOU LOSE</p>';
                    setScore(score - 1);
                    localStorage.setItem('score', score - 1);
                    break;
                default:
                    return;
            }
            resultText.innerHTML += result;
            resultDiv.style.visibility = 'visible';
        }, 3000);
    }, [])

    return (
        <div>
            <TopBar score={score} />
            <div className="game-results">
                <Icon symbol={url} color={color} />
                <div className="empty-icon">a</div>
                <div className="cpu">
                    <Icon symbol={cpuSymbol} color={cpuColor} />
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