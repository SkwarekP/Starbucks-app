import classes from "./GettingStarted.module.css" ;

function GettingStarted(){
    return (
        <div className={classes.section3Container}>
            <div className={classes.section3Header}>
                <h3>Getting started is easy</h3>
                <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className={classes.list}>
                <div className={classes.list__item}>
                    <div className={classes.counterIconContainer}>
                        <div className={classes.counterIcon}>1</div>
                    </div>
                    <div className={classes.list__item_text}>
                        <h3>Download the Starbucks app</h3>
                        <p><span className={classes.greenSpan}>Join in the app </span>
                            to get access to the full range of Starbucks Rewards benefits. You can also
                            <span className={classes.greenSpan}> join online.</span></p>
                    </div>
                </div>
                <div className={classes.list__item}>
                    <div className={classes.counterIconContainer}>
                        <div className={classes.counterIcon}>2</div>
                    </div>
                    <div className={classes.list__item_text}>
                        <h3>Order and pay how you'd like</h3>
                        <p>Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways.
                            <span className={classes.greenSpan}> Learn how</span></p>
                    </div>
                </div>
                <div className={classes.list__item}>
                    <div className={classes.counterIconContainer}>
                        <div className={classes.counterIcon}>3</div>
                    </div>
                    <div className={classes.list__item_text}>
                        <h3>Earn Stars, get Rewards</h3>
                        <p>As you earn Stars, you can rendeem them for Rewards - like free food, drinks, and more. Start rendeeming with as little as 25 Stars!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GettingStarted;