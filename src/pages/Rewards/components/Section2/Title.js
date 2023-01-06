import classes from "./Title.module.css";

function Title(){

    return (
        <div className={classes.section2Container}>
            <div className={classes.section2Content}>
                <h1>Free Coffee <br />is a tap away</h1>
                <p>Join now to start earning Rewards</p>
                <button className={`${classes.headerBtn} ${classes.section2Btn}`}>Join in the app</button>
                <div className={classes.section2a}>
                    <button className={classes.a__btn}>Or join online</button>
                </div>
            </div>
        </div>
    )
}
export default Title;