import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';
import rock from '../../../assets/img/icon-rock.svg';
import paper from '../../../assets/img/icon-paper.svg';
import scissors from '../../../assets/img/icon-scissors.svg';
import bg from '../../../assets/img/bg-triangle.svg';
import './main.css';


const Main = () => {

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