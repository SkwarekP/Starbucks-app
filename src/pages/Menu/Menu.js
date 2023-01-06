import Header from "../Rewards/components/Section1/Header";
import classes from "./Menu.module.css";
import drink1 from "./Menu_images/menu_img1.webp";
import drink2 from "./Menu_images/menu_img2.webp";
import drink3 from "./Menu_images/menu_img3.webp";
import drink4 from "./Menu_images/menu_img4.webp";
import drink5 from "./Menu_images/menu_img5.webp";
import drink6 from "./Menu_images/menu_img6.webp";
import drink7 from "./Menu_images/menu_img7.webp";
import food1 from "./Menu_images/food_img1.webp";
import food2 from "./Menu_images/food_img2.webp";
import food3 from "./Menu_images/food_img3.webp";
import food4 from "./Menu_images/food_img4.webp";
import food5 from "./Menu_images/food_img5.webp";
import athome from "./Menu_images/athome_img1.webp";
import athome2 from "./Menu_images/athome_img3.webp";
import merchan1 from "./Menu_images/merchan_img1.webp";
import merchan2 from "./Menu_images/merchan_img2.webp";
import merchan3 from "./Menu_images/merchan_img3.webp";
import gift1 from "./Menu_images/gift_card_img1.webp";
import gift2 from "./Menu_images/gift_card_img2.webp";
import gift3 from "./Menu_images/gift_card_img3.webp";
import Footer from "../Rewards/components/Section10/Footer";
import NavMenu from "./components/NavMenu";
import LeftBar from "./components/LeftBar";
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';


function Menu() {

    const products = useSelector(state => state)
    const navigate = useNavigate();

    const navigateProductHandler = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const headerObj = products.find(header => header.header);
        const headerNames = headerObj.header;
        headerNames.forEach(el => {
            if (el === name) {
                navigate(`/Menu/Drink/${el}`, {state: {products}});
            }
             return 1;
        })
    }

    return (
        <>
            <section>
                <Header/>
            </section>
            <section>
                <NavMenu/>
            </section>
            <section className={classes.large__size__resolution__leftbar__flex}>
                <LeftBar products={products}/>
                <section>
                    <div className={classes.section3__menu__container}>
                        <div className={classes.section2Container}>
                            <h1>Menu</h1>
                            <h3>Drinks</h3>
                        </div>
                        <div className={classes.interline}></div>
                        <div className={classes.section3__menu__drinks}>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={drink1} alt="drink1" onClick={navigateProductHandler}
                                             name="hotCoffees"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Hot Coffees</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={drink2} alt="drink1" onClick={navigateProductHandler}
                                             name="hotTeas"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Hot Teas</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={drink3} alt="drink1" onClick={navigateProductHandler}
                                             name="hotDrinks"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Hot Drinks</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={drink4} alt="drink1" onClick={navigateProductHandler}
                                             name="frappucino"/>
                                    </div>
                                    <div
                                        className={`${classes.section3__drinks__item__title} ${classes.resize_size_title}`}>
                                        <p>Frappucino Blended Beverages</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={drink5} alt="drink1" onClick={navigateProductHandler}
                                             name="coldCoffees"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Cold Coffees</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={drink6} alt="drink1" onClick={navigateProductHandler}
                                             name="icedTeas"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Iced Teas</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section3__drinks__item}>
                                <div className={classes.section3__drinks__item__img}>
                                    <img src={drink7} alt="drink1" onClick={navigateProductHandler} name="coldDrinks"/>
                                </div>
                                <div className={classes.section3__drinks__item__title}>
                                    <p>Cold Drinks</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.section3__menu__drinks}>
                            <div className={classes.section3__category__title}>
                                <h2>Food</h2>
                                <div className={classes.interline}></div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={food1} alt="food1"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Hot Breakfast</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={food2} alt="food2"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Bakery</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={food3} alt="food3"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Lunch</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={food4} alt="food4"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Snacks & Sweets</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section3__drinks__item}>
                                <div className={classes.section3__drinks__item__img}>
                                    <img src={food5} alt="food5"/>
                                </div>
                                <div className={classes.section3__drinks__item__title}>
                                    <p>Oatmeal & Yoghurt</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.section3__menu__drinks}>
                            <div className={classes.section3__category__title}>
                                <h2>At home Coffee</h2>
                                <div className={classes.interline}></div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={athome} alt="food1"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Whole Bean</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={athome} alt="food2"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Ground</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section3__drinks__item}>
                                <div className={classes.section3__drinks__item__img}>
                                    <img src={athome2} alt="food3"/>
                                </div>
                                <div className={classes.section3__drinks__item__title}>
                                    <p>VIA Instant</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.section3__menu__drinks}>
                            <div className={classes.section3__category__title}>
                                <h2>Merchandise</h2>
                                <div className={classes.interline}></div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={merchan1} alt="food1"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Cold Cups</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={merchan2} alt="food2"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Tumblers</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section3__drinks__item}>
                                <div className={classes.section3__drinks__item__img}>
                                    <img src={merchan3} alt="food3"/>
                                </div>
                                <div className={classes.section3__drinks__item__title}>
                                    <p>Other</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.section3__menu__drinks}>
                            <div className={classes.section3__category__title}>
                                <h2>Gift Cards</h2>
                                <div className={classes.interline}></div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={gift1} alt="food1"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Happy Birthday</p>
                                    </div>
                                </div>
                                <div className={classes.section3__drinks__item}>
                                    <div className={classes.section3__drinks__item__img}>
                                        <img src={gift2} alt="food2"/>
                                    </div>
                                    <div className={classes.section3__drinks__item__title}>
                                        <p>Thank you</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.section3__drinks__item}>
                                <div className={classes.section3__drinks__item__img}>
                                    <img src={gift3} alt="food3"/>
                                </div>
                                <div className={classes.section3__drinks__item__title}>
                                    <p>Traditional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className={classes.interline}></div>
            <section className={classes.footer}>
                <Footer/>
            </section>
        </>
    )
}

export default Menu;