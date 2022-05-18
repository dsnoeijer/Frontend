import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';
import rock from '../../../assets/img/icon-rock.svg';
import paper from '../../../assets/img/icon-paper.svg';
import scissors from '../../../assets/img/icon-scissors.svg';
import bg from '../../../assets/img/bg-triangle.svg';
import './main.css';


const Main = () => {

    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    return (
        <div>
            <div className="icons">
                <div className='bg'>
                    <img className="bg-image" src={bg} alt="triangle background" />
                </div>
                <Link to="/game"
                    state={{
                        pick: 'paper',
                        url: paper,
                        color: '#5470ed'
                    }}>
                    <Icon symbol={paper} color={'#5470ed'} />
                </Link>
                <Link to="/game"
                    state={{
                        pick: 'scissors',
                        url: scissors,
                        color: '#eda626'
                    }}>
                    <Icon symbol={scissors} color={'#eda626'} pick='scissors' />
                </Link>
                <Link to="/game"
                    state={{
                        pick: 'rock',
                        url: rock,
                        color: '#dd4157'
                    }}>
                    <Icon symbol={rock} color={'#dd4157'} pick='rock' />
                </Link>
            </div>
        </div>
    )
}

export default Main;