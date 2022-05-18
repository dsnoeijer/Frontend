import './rules.css';
import rulesImage from '../../../assets/img/image-rules.svg';
import iconClose from '../../../assets/img/icon-close.svg';


const showRules = () => {
    const div = document.querySelector('.showRules');
    div.classList.add('toggleVisibility');
}

const closeRules = () => {
    const close = document.querySelector('.showRules');
    close.classList.remove('toggleVisibility');
}

const Rules = () => {
    return (
        <div>
            <div className="rules">
                <button onClick={showRules}>RULES</button>
            </div>
            <div className="showRules">
                <h1>RULES</h1>
                <div className="rulesImage">
                    <img src={rulesImage} alt="game rules" />
                </div>
                <button onClick={closeRules}>
                    <img src={iconClose} alt="close" />
                </button>
            </div>
        </div>
    )
}

export default Rules;