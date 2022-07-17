const CurrentPlayer = ({ currentPlayer }) => {
    const currentPlayerString = 'Current Player: ';
    return (
        <div className="current-player">
            <p>{currentPlayerString} <span className="dot" style={{backgroundColor: currentPlayer}}></span></p>
        </div>
    )
}

export default CurrentPlayer;
