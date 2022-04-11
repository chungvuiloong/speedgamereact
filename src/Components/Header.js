const Header = (props) => {
    return (
        <div>
            <header>Whack-a-button!</header>
            <div>Try to whack the button as much as you can before it moves to the next button. And get try to the highest score!</div>
            <h2>Your score is: <span name="score" id="score">{props.counter}</span></h2>
        </div>
    )

};

export default Header;