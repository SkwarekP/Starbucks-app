import classes from "./SignIn.module.css";
import Header from "../Rewards/components/Section1/Header";
import {useLocation} from "react-router-dom";
import Footer from "../Rewards/components/Section10/Footer";

function SignIn() {
    const location = useLocation();

    return (
        <div>
            <section>
                <Header navIcons={location.state.navIcon}/>
            </section>
            <div className={classes.container}>
                <h1>Sign in or create an account</h1>
                <section className={classes.sec1__container}>
                    <div className={classes.head}>
                        <p>* indicates required field</p>
                    </div>
                    <div className={classes.inputs}>
                        <div className={classes.input}>
                            <input type="text" placeholder="* Username or email address" className={classes.input1}/>
                        </div>
                        <div className={classes.input}>
                            <input type="text" placeholder="* Password"/>
                        </div>
                    </div>
                    <div className={classes.checkbox_flex}>
                        <input type="checkbox"/>
                        <p>Keep me signed in. <span className={classes.green_span}>Details</span></p>
                    </div>
                    <div className={classes.reminder}>
                        <li className={classes.green_span}>Forgot your username?</li>
                        <li className={classes.green_span}>Forgot your password?</li>
                    </div>
                    <div className={classes.signIn_button__container}>
                        <button className={classes.sign_btn}>Sign in</button>
                    </div>
                </section>
                <section className={classes.section2__container}>
                    <h3>Join Starbucks® Rewards</h3>
                    <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with
                        your
                        phone, and more.</p>
                    <button className={classes.sec2__card_btn}>Join now</button>
                </section>
            </div>
            <section>
                <Footer/>
            </section>
        </div>
    )
}

export default SignIn;