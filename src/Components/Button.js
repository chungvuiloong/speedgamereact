const Button = (props) => {
    return (
        <div>
            <button onClick={props.startGame}>Start Game</button>
            <button onClick={props.stopGame}>Stop Game</button>
        </div>
    )
};

export default Button;