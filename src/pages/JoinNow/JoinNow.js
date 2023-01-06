import classes from "./JoinNow.module.css";
import Header from "../Rewards/components/Section1/Header";
import Footer from "../Rewards/components/Section10/Footer";
import {useLocation} from "react-router-dom";

function JoinNow() {
    const location = useLocation();

    return (
        <div>
            <section>
                <Header navIcons={location.state.navIcon}/>
            </section>
            <section>
                <div className={classes.container}>
                    <div className={classes.sec2__head}>
                        <h1>Create an account</h1>
                        <h2 className={classes.tablet_visibility__h2}>Starbucks Rewards</h2>
                        <p className={classes.opacity}>Join Starbucks Rewards to earn Stars for free food and drinks,
                            any way you pay. Get access to
                            mobile ordering, a birthday Reward, and more.</p>
                    </div>
                    <div className={classes.tablet_visibility__card}>
                        <div className={classes.sec2__inputs}>
                            <p><span>*</span> indicates required field</p>
                            <h3>Personal information</h3>
                            <div className={classes.sec2__input}>
                                <input type="text" placeholder="* First name" className={classes.input}/>
                            </div>
                            <div className={classes.sec2__input}>
                                <input type="text" placeholder="* Last name" className={classes.input}/>
                            </div>
                        </div>
                        <div className={classes.sec2__inputs}>
                            <h3>Account Security</h3>
                            <div className={classes.sec2__input}>
                                <input type="text" placeholder="* Email address" className={classes.input}/>
                                <div className={classes.sec2__input__text_under}>
                                    <p>This will be your username</p>
                                </div>
                            </div>
                            <div className={classes.sec2__input}>
                                <input type="text" placeholder="* Password" className={classes.input}/>
                                <div className={classes.sec2__input__text_under}>
                                    <p>Create a password 8 to 25 characters long that includes at least 1 uppercase and
                                        1
                                        lowercase letter,
                                        1 number and 1 special character like an exclamation point or asterisk.</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.sec2__end_sec}>
                            <h4>Already have a Starbucks gift card?</h4>
                        </div>
                        <div className={classes.sec3__radio}>
                            <div className={classes.sec3__header}>
                                <h4>Collect more stars & earn Rewards</h4>
                                <p>Email is a great way to know about offers and what’s new from Starbucks.</p>
                            </div>
                            <div className={classes.sec3__flex_radio}>
                                <div className={classes.checkbox}>
                                    <input type="checkbox" className={classes.radio_icon}></input>
                                </div>
                                <div className={classes.sec3__radio_text}>
                                    <p>Yes, I'd like email from Starbucks</p>
                                    <p className={classes.opacity}>Know about initiatives, announcements and product
                                        offers.</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.sec3__radio}>
                            <div className={classes.sec3__header}>
                                <h4>Terms of use</h4>
                            </div>
                            <div className={classes.sec3__flex_radio}>
                                <div className={classes.checkbox}>
                                    <input type="checkbox" className={classes.radio_icon}></input>
                                </div>
                                <div className={classes.sec3__radio_text}>
                                    <p>I agree to the Starbucks® Rewards Termsopens in new window
                                        and the Starbucks Card Termsopens in new window
                                        and have read the Starbucks Privacy Statementopens in new window
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className={classes.sec3__button_container}>
                                <button className={classes.sec3__button}>
                                    Create account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    )
}

export default JoinNow;