import classes from "./CashOrCard.module.css"
import star_icon from "../../Images/bxs-star.svg";
import sec7_1 from "../../Images/sec7_1.png";
import sec7_2 from "../../Images/sec7_2.webp";
import sec7_3 from "../../Images/sec7_3.webp";
import sec7_4 from "../../Images/sec7_4.webp";

function CashOrCard() {
    return (
        <div className={classes.section7Container}>
            <div className={classes.section7__header}>
                <h2>Cash or card, you earn Stars</h2>
                <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
            </div>
            <div className={classes.section7__list__title}>
                <h3>1<img src={star_icon} alt="star" /> per dollar</h3>
                <p>Pay as you go</p>
            </div>
            <div className={classes.section7__list}>
                <div className={classes.section7__list__item}>
                    <div className={classes.section6Img}>
                        <img src={sec7_1} alt="sec7_1" />
                    </div>
                    <div className={classes.section7__list__item__text}>
                        <h3>Scan and pay separately</h3>
                        <p>Use cash or credit/debit card at the register.</p>
                    </div>
                </div>
                <div className={classes.section7__list__item}>
                    <div className={classes.section6Img}>
                        <img src={sec7_2} alt="sec7_2" />
                    </div>
                    <div className={classes.section7__list__item__text}>
                        <h3>Save payment in the app</h3>
                        <p>Check-out faster by saving a credit/debit card or PayPal to your account. You'll be able to order ahead or scan and pay at the register in one step</p>
                    </div>
                </div>
            </div>
            <div className={classes.interline}></div>
            <div className={classes.section7__list__title}>
                <h3>2<img src={star_icon} alt="star" /> per dollar</h3>
                <p>Add funds in the app</p>
            </div>
            <div className={classes.section7__list}>
                <div className={classes.section7__list__item}>
                    <div className={classes.section6Img}>
                        <img src={sec7_3} alt="sec7_1" />
                    </div>
                    <div className={classes.section7__list__item__text}>
                        <h3>Preload</h3>
                        <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app</p>
                    </div>
                </div>
                <div className={classes.section7__list__item}>
                    <div className={classes.section6Img}>
                        <img src={sec7_4} alt="sec7_2" />
                    </div>
                    <div className={classes.section7__list__item__text}>
                        <h3>Register your gift card</h3>
                        <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CashOrCard;