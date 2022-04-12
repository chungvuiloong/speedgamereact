const Button = (props) => {
    return (
        <div>
            <button onClick={props.startGame}>Start Game</button>
            <button onClick={props.endGame}>Game Ended</button>
        </div>
    )
};

export default Button;