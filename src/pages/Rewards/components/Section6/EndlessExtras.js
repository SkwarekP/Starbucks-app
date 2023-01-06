import sec6_1 from "../../Images/sec6_1.webp";
import sec6_2 from "../../Images/sec6_2.webp";
import sec6_3 from "../../Images/sec6_3.webp";

import classes from "./EndlessExtras.module.css"
function EndlessExtras() {
    return (
        <div className={classes.section6Container}>
            <div className={classes.section6Header}>
                <h2>Endless Extras</h2>
                <p>Joining Starbucks Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and - yes, free coffee.</p>
            </div>
            <div className={classes.section6__list}>
                <div className={classes.section6__list__item}>
                    <div className={classes.section6Img}><img src={sec6_1} alt="sec6_1" /></div>
                    <div className={classes.section6__list__item__text}>
                        <h3>Fun freebies</h3>
                        <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={classes.section6__list__item}>
                    <div className={classes.section6Img}><img src={sec6_2} alt="sec6_2" /></div>
                    <div className={classes.section6__list__item__text}>
                        <h3>Order & pay ahead</h3>
                        <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={classes.section6__list__item}>
                    <div className={classes.section6Img}><img src={sec6_3} alt="sec6_3" /></div>
                    <div className={classes.section6__list__item__text}>
                        <h3>Get to free faster</h3>
                        <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games</p>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EndlessExtras;