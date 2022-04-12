import styles from './Circle.module.css';


const Circle = (props) => {
    return (
        <div className={styles.circleContainer}>
            <div className={styles.circle} name="circle" value="1" onClick={props.onClick}>
                Circle
            </div>
            <div className={styles.circle} name="circle" value="2" onClick={props.onClick}>
                Circle
            </div>
            <div className={styles.circle} name="circle" value="3" onClick={props.onClick}>
                Circle
            </div>

        </div>
    )
};

export default Circle;