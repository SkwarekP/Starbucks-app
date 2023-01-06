import classes from "./Welcome.module.css"
import Header from "../Rewards/components/Section1/Header";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.png";
import img4 from "./images/img4.jpg";
import Footer from "../Rewards/components/Section10/Footer";
import Modal from "./Modal";
import {useState} from "react";


function Welcome() {
    const [isOpen, setIsOpen] = useState(false);

    const modalHandler = () => {
        setIsOpen(prev => !prev);
        if (isOpen) {
            document.body.style.overflow = "auto";
        } else document.body.style.overflow = "hidden";
    }

    return (
        <>
            {isOpen && <Modal onClose={modalHandler}/>}
            <section>
                <Header/>
            </section>
            <div className={classes.welcome__container}>
                <section>
                    <div className={classes.tablet__flex}>
                        <div className={classes.sec2__container}>
                            <img src={img1} alt="img1"/>
                        </div>
                        <div className={classes.sec3__container}>
                            <div className={classes.sec3__text}>
                                <h1>Make your Rewards merrier</h1>
                                <p>Starbucks® Rewards + Delta SkyMiles® have come together! Link your accounts to get 1
                                    mile per $1* spent at Starbucks.</p>
                                <div className={classes.sec3__btn__container}>
                                    <button className={classes.sec3__btn} onClick={modalHandler}>Link now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.tablet__flex}>
                        <div className={classes.sec2__container}>
                            <img src={img2} alt="img2"/>
                        </div>
                        <div className={classes.sec3__container} style={{background: "#003da5"}}>
                            <div className={classes.sec3__text}>
                                <h1>Cold brew cheer</h1>
                                <p>’Tis the season for an Irish Cream Cold Brew with sweet cream cold foam and cocoa
                                    powder.</p>
                                <div className={classes.sec3__btn__container}>
                                    <button className={classes.sec3__btn}>Order now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.tablet__flex}>
                        <div className={classes.sec2__container} style={{background: "#006241"}}>
                            <img src={img3} alt="img3"/>
                        </div>
                        <div className={classes.sec3__container} style={{background: "#006241"}}>
                            <div className={classes.sec3__text}>
                                <h1>Perfect for sharing</h1>
                                <p>The Cranberry Bliss® Bar Tray is always a crowd-pleaser. Pick one up for your next
                                    holiday gathering.</p>
                                <div className={classes.sec3__btn__container}>
                                    <button className={classes.sec3__btn}>Order now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.tablet__flex}>
                        <div className={classes.sec2__container} style={{background: "#d50032"}}>
                            <img src={img4} alt="img4"/>
                        </div>
                        <div className={classes.sec3__container} style={{background: "#d50032"}}>
                            <div className={classes.sec3__text}>
                                <h1>A tradition to celebrate</h1>
                                <p>Our medium-roast Starbucks® Thanksgiving Blend features notes of candied pecan and
                                    sage.</p>
                                <div className={classes.sec3__btn__container}>
                                    <button className={classes.sec3__btn}>Order now</button>
                                </div>
                            </div>
                            {/*<div className={classes.sec3__btn__container}>
                        <button className={classes.sec3__btn}>Order now</button>
                    </div>*/}
                        </div>
                    </div>

                    <div className={classes.last__div__container}>
                        <div className={classes.last__div__text}>
                            <p>*Excludes taxes and gratuities. At participating stores.
                                Some restrictions apply. 150 Stars deposited after first qualifying Starbucks purchase.
                                Flights purchased close to departure may not earn double Stars. Stars may not be earned
                                on purchases of alcohol,
                                Starbucks Cards and Starbucks Card reloads. For details, visit
                                deltastarbucks.com/terms.</p>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Welcome;