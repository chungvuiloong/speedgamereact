const Overlay = (props) => {
    return (
    <div class="modal">
        <p>Game Over</p>
        <p id="result">{props.result}</p>
        <p id="commentResult">{props.commentResult}</p>
        <button type="button" id="close">close</button>
    </div>
    );
};

export default Overlay;