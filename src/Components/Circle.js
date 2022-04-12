import styles from './Circle.module.css';


const Circle = (props) => {

    return (
        <div className={styles.circleContainer} name={props.circles}>
            <div className={styles.circle} name="1" value="1" onClick={props.onClick}>
                Circle
            </div>
            <div className={styles.circle} name="2" value="2" onClick={props.onClick}>
                Circle
            </div>
            <div className={styles.circle} name="3" value="3" onClick={props.onClick}>
                Circle
            </div>


        </div>
    )
};

export default Circle;