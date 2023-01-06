import classes from "./Header.module.css";
import {useEffect, useState} from "react";

function Header2() {
    const [stickyClass, setStickyClass] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY) {
                setStickyClass(true);
            }
            else {
                setStickyClass(false);
            }
        }
    }, [])
    return (
        <header className={`${classes.headerContainer} ${stickyClass ? classes.sticky__header : ""}`}>
            <div className={`${classes.flexNav} ${classes.section1__underheader_header}`}>
                <h4>Starbucks Rewards</h4>
                <button className={classes.headerBtn}>
                    Join in the app
                </button>
            </div>
        </header>
    )
}
export default Header2;