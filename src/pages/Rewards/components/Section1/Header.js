import classes from "./Header.module.css"
import starbucks_logo from "../../Images/Starbucks-logo.png";
import burger_icon from "../../Images/bx-menu.svg";
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Header(props) {

    const [showMenu, setShowMenu] = useState(false);
    const [joinNowRender, setJoinNowRender] = useState(true);
    const [hide, setHide] = useState(false);
    const navigate = useNavigate();

    const expandMenuHandler = (e) => {
        e.preventDefault();
        if (showMenu) {
            setHide(true);
            setTimeout(() => {
                setShowMenu(false)
                setHide(false);
            }, 350)
        } else {
            setShowMenu(prev => !prev)
        }
        document.body.style.overflow = "hidden";
    }
    const iconNavigateHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }
    const joinNowHandler = (e) => {
        e.preventDefault();
        navigate("/Join", {state: {navIcon: false}});
    }
    const signInHandler = (e) => {
        e.preventDefault();
        navigate("/SignIn", {state: {navIcon: false}});
    }

    useEffect(() => {

        if (!props.navIcons && props.navIcons !== undefined) {
            console.log("log from header", props.navIcons);
            setJoinNowRender(props.navIcons);
        }

    }, [joinNowRender, props.navIcons])

    useEffect(() => {
        if (!showMenu) {
            document.body.style.overflow = "auto";
        }
    }, [showMenu])

    return (
        <header className={classes.navContainer}>
            <nav className={classes.flexNav}>
                <li><img src={starbucks_logo} alt="starbucks_logo" onClick={iconNavigateHandler}/></li>
                {joinNowRender && <li
                    className={`${classes.section1__desktop__nav__item}`}
                ><NavLink to="/Menu"
                          className={({isActive}) => isActive ? classes.currentMenuBorder : ''}>Menu</NavLink>
                </li>}

                {joinNowRender && <li
                    className={`${classes.section1__desktop__nav__item}`}
                ><NavLink to="/Rewards"
                          className={({isActive}) => isActive ? classes.currentMenuBorder : ''}>Rewards</NavLink>
                </li>}

                {joinNowRender && <li
                    className={`${classes.section1__desktop__nav__item}`}
                >
                    <NavLink to="/Gift" className={({isActive}) => isActive ? classes.currentMenuBorder : ''}>Gift
                        Cards</NavLink>
                </li>}

                {joinNowRender && <li className={classes.section1__desktop__nav__item}>Find a store</li>}
                {joinNowRender && <li className={classes.section1__desktop__nav__item}>
                    <button className={classes.section1__signIn_btn} onClick={signInHandler}>Sign in</button>
                </li>}
                {joinNowRender && <li className={classes.section1__desktop__nav__item}>
                    <button className={classes.section1__JoinNow_btn} onClick={joinNowHandler}>Join now</button>
                </li>}
                <li><img src={burger_icon} alt="burger_icon" className={classes.burger__icon}/></li>
            </nav>
            <nav className={`${classes.mobile__and__tablet__header}`}>
                <li><img src={starbucks_logo} alt="starbucks_logo" onClick={iconNavigateHandler}/></li>
                {/*{joinNowRender && <li><img src={burger_icon} alt="burger_icon" className={classes.burger__icon}
                                           onClick={expandMenuHandler}/>
                </li>}*/}
                {showMenu ? <li>
                    <div className={classes.cross_close_container} onClick={expandMenuHandler}>
                        <div className={classes.cross_close}></div>
                        <div className={`${classes.cross_close} ${classes.cross_close2}`}></div>
                    </div>
                </li> : joinNowRender &&
                    <li>
                        <div className={classes.cross_close_container} onClick={expandMenuHandler}>
                            <div className={classes.burger_horizontal_rect}></div>
                        </div>
                    </li>}
            </nav>
            {showMenu &&
                <div className={`${classes.menu} ${hide ? classes.menu__after__closing : null}`}>
                    <div className={classes.menu__after__expand__list}>
                        <li
                            className={`${classes.menu__after__expand__listItem}`}
                        ><NavLink to="/Menu"
                                  className={({isActive}) => isActive ? classes.currentMenuBorder : ''}>Menu</NavLink>
                        </li>
                        <li
                            className={`${classes.menu__after__expand__listItem}`}
                        ><NavLink to="/Rewards"
                                  className={({isActive}) => isActive ? classes.currentMenuBorder : ''}>Rewards</NavLink>
                        </li>
                        <li
                            className={`${classes.menu__after__expand__listItem}`}
                        >
                            <NavLink to="/Gift" className={({isActive}) => isActive ? classes.currentMenuBorder : ''}>Gift
                                Cards</NavLink>
                        </li>
                    </div>
                    <div className={classes.interline}></div>
                    <div className={classes.menu__after__expand__btns}>
                        <li>
                            <button className={classes.section1__signIn_btn} onClick={signInHandler}>Sign in</button>
                        </li>
                        <li>
                            <button className={classes.section1__JoinNow_btn} onClick={joinNowHandler}>Join now</button>
                        </li>
                    </div>
                    <li className={classes.find_store}>find a store</li>
                </div>
            }
        </header>
    )
}

export default Header;