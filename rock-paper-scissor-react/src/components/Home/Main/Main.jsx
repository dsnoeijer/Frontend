import { useContext, useEffect } from 'react';
import { Context } from '../../Store/Store';

import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';
import rock from '../../../assets/img/icon-rock.svg';
import paper from '../../../assets/img/icon-paper.svg';
import scissors from '../../../assets/img/icon-scissors.svg';
import bg from '../../../assets/img/bg-triangle.svg';
import './main.css';


const Main = () => {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        const options = ['rock', 'paper', 'scissors'];
        const randomOption = Math.floor(Math.random() * 3);
        const computer = options[randomOption];

        if (computer === 'rock') {
            dispatch({
                type: 'SET_CPU_PICK',
                payload: {
                    cpuPick: 'rock',
                    cpuSymbol: rock
                }
            })
        } else if (computer === 'paper') {
            dispatch({
                type: 'SET_CPU_PICK',
                payload: {
                    cpuPick: 'paper',
                    cpuSymbol: paper
                }
            })
        } else {
            dispatch({
                type: 'SET_CPU_PICK',
                payload: {
                    cpuPick: 'scissors',
                    cpuSymbol: scissors
                }
            })
        }
    }, []);

    return (
        <div className='icons-div'>
            <div className="icons">
                <div className='bg'>
                    <img className="bg-image" src={bg} alt="triangle background" />
                </div>
                <Link to="/game">
                    <Icon symbol={paper} pick='paper' />
                </Link>
                <Link to="/game">
                    <Icon symbol={scissors} pick='scissors' />
                </Link>
                <Link to="/game">
                    <Icon symbol={rock} pick='rock' />
                </Link>
            </div>
        </div>
    )
}

export default Main;