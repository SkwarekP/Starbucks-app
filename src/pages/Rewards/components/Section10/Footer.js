import classes from "./Footer.module.css";
import arrowDown from "../../Images/bx-chevron-down.svg";
import spotify_icon from "../../Images/bxl-spotify.svg";
import facebook_icon from "../../Images/bxl-facebook-circle.svg";
import pinterest_icon from "../../Images/bxl-pinterest.svg";
import instagram_icon from "../../Images/bxl-instagram-alt.svg";
import yt_icon from "../../Images/bxl-youtube.svg";
import twitch_icon from "../../Images/bxl-twitter.svg";

function Footer() {
    return (
        <footer className={classes.section10Container}>
            <div className={`${classes.interline}`}></div>
            <div className={classes.section10__list}>
                <div className={classes.section10__list__row}>
                    <li>Social Impact</li>
                    <li><img src={arrowDown} alt="arrowdown" /></li>
                    <div className={classes.section10__desktop_col}>
                        <li className={classes.li__desktop}><h3>About Us</h3></li>
                        <li className={classes.li__desktop}>Our company</li>
                        <li className={classes.li__desktop}>Our Coffee</li>
                        <li className={classes.li__desktop}>Stories and News</li>
                        <li className={classes.li__desktop}>Starbucks Archive</li>
                        <li className={classes.li__desktop}>Investor Relations</li>
                        <li className={classes.li__desktop}>Customer Service</li>
                        <li><img src={arrowDown} alt="arrowdown" /></li>
                    </div>
                </div>
                <div className={classes.section10__list__row}>
                    <li>About Us</li>
                    <li><img src={arrowDown} alt="arrowdown" /></li>
                    <div className={classes.section10__desktop_col}>
                        <li className={classes.li__desktop}><h3>Careers</h3></li>
                        <li className={classes.li__desktop}>Culture and Values</li>
                        <li className={classes.li__desktop}>Inclusion, Diversity, and Equity</li>
                        <li className={classes.li__desktop}>College Achievement</li>
                        <li className={classes.li__desktop}>Alumni Community</li>
                        <li className={classes.li__desktop}>U.S. Careers</li>
                        <li className={classes.li__desktop}>International Careers</li>
                        <li><img src={arrowDown} alt="arrowdown" /></li>
                    </div>
                </div>
                <div className={classes.section10__list__row}>
                    <li>Social Impact</li>
                    <li><img src={arrowDown} alt="arrowdown" /></li>
                    <div className={classes.section10__desktop_col}>
                        <li className={classes.li__desktop}><h3>Social Impact</h3></li>
                        <li className={classes.li__desktop}>People</li>
                        <li className={classes.li__desktop}>Planet</li>
                        <li className={classes.li__desktop}>Environmental and Social </li>
                        <li className={classes.li__desktop}>Impact Reporting</li>
                        <li><img src={arrowDown} alt="arrowdown" /></li>
                    </div>
                </div>
                <div className={classes.section10__list__row}>
                    <li>For business partners</li>
                    <li><img src={arrowDown} alt="arrowdown" /></li>
                    <div className={classes.section10__desktop_col}>
                        <li className={classes.li__desktop}><h3>For Business Partners</h3></li>
                        <li className={classes.li__desktop}>Landlord Support Center</li>
                        <li className={classes.li__desktop}>Suppliers</li>
                        <li className={classes.li__desktop}>Corporate Gift Card Sales</li>
                        <li className={classes.li__desktop}>Office and Foodservice Coffee</li>
                        <li><img src={arrowDown} alt="arrowdown" /></li>
                    </div>
                </div>
                <div className={classes.section10__list__row}>
                    <li>Order and Pickup</li>
                    <li><img src={arrowDown} alt="arrowdown" /></li>
                    <div className={classes.section10__desktop_col}>
                        <li className={classes.li__desktop}><h3>Order and Pickup</h3></li>
                        <li className={classes.li__desktop}>Order on the App</li>
                        <li className={classes.li__desktop}>Order on the Web</li>
                        <li className={classes.li__desktop}>Delivery</li>
                        <li className={classes.li__desktop}>Order and Pickup Options</li>
                        <li className={classes.li__desktop}>Explore and Find Coffee</li>
                        <li><img src={arrowDown} alt="arrowdown" /></li>
                    </div>
                </div>
            </div>
            <div className={`${classes.interline} ${classes.interline__shadow}`}></div>
            <div className={classes.icons__flex}>
                <li><img src={spotify_icon} alt="spotify" /></li>
                <li><img src={facebook_icon} alt="spotify" /></li>
                <li><img src={pinterest_icon} alt="spotify" /></li>
                <li><img src={instagram_icon} alt="spotify" /></li>
                <li><img src={yt_icon} alt="spotify" /></li>
                <li><img src={twitch_icon} alt="spotify" /></li>
            </div>
            <div className={classes.section10__list__underIcon}>
                <li>Privacy Notice</li>
                <li>Terms of Use</li>
                <li>CA Supply Chain Act</li>
                <li>Cookie Preferences</li>
                <li>2022 Starbucks Coffee Company. All rights reserved.</li>
            </div>
            <div className={classes.section10__last}>
                <li>2022 Starbucks Coffee Company. All rights reserved.</li>
            </div>
        </footer>
    )
}
export default Footer;