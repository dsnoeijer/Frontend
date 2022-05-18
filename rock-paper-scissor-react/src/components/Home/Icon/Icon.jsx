import './icon.css';


const Icon = ({ pick, symbol, color }) => {

    return (
        <div className="icon-single" style={{ border: `14px solid ${color}` }}>
            <img src={symbol} alt={pick} />
        </div>
    )
}

export default Icon;