import {useLocation} from "react-router-dom";
import Header from "../../Rewards/components/Section1/Header";
import classes from "./Product.module.css";
import Footer from "../../Rewards/components/Section10/Footer";
import {useState} from "react";
import EditProductModal from "./EditProductModal";
import {productsActions} from "../../../store/index";
import {useDispatch} from "react-redux";

function Product() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [calories, setCalories] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [isChoosed, setIsChoosed] = useState([
        {
            name: 'short', flag: true, calories: 0,
        },
        {
            name: 'tall', flag: false, calories: 25,
        },
        {
            name: 'grande', flag: false, calories: 50,
        },
        {
            name: 'venti', flag: false, calories: 100
        }
    ]);

    const choiceSizeHandler = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const newState = isChoosed.map(item => {
            if (item.name === id) {
                setCalories(item.calories);
                return {...item, flag: true}
            }
            return {...item, flag: false};
        })
        setIsChoosed(newState);
    }

    const toggleModalHandler = () => {
        setIsOpen(prev => !prev);
        if (isOpen) document.body.style.overflow = "auto";
        else document.body.style.overflow = "hidden";
    }

    const receiveDataHandler = (data) => {
        const data_ = [];
        data_.push(data)
        console.log(data_);
        dispatch(productsActions.addCustomization(location.state.item.type));
    }

    return (
        <>
            {isOpen && <EditProductModal onClose={toggleModalHandler} onReceive={receiveDataHandler}/>}
            <section>
                <Header/>
                <header className={classes.headerPath}>
                    <div className={classes.headerPath_text}>
                        <p>Menu / Hot Drinks / <b>{location.state.item.name}</b></p>
                    </div>
                </header>
            </section>
            <section>
                <div className={classes.product__container}>
                    <div className={classes.product__img}>
                        <img src={location.state.item.img} alt="drink"/>
                    </div>
                    <div className={classes.product__text}>
                        <h2>{location.state.item.name}</h2>
                        <p>{location.state.item.calories + calories} calories</p>
                    </div>
                </div>
            </section>
            <section className={classes.desktop__flex_row}>
                <div className={classes.desktop__left_options}>
                    <div className={classes.size__options_header}>
                        <h3>Size options</h3>
                        <div className={classes.size__options_interline}></div>
                    </div>
                    <div className={classes.size__options_row}>
                        <div className={classes.drink_image}>
                            <img src="https://www.starbucks.com/app-assets/0295bad53506b2b3c22b7e5a16fd1554.svg"
                                 alt="ss" id="short" onClick={choiceSizeHandler}
                                 className={isChoosed.find(item => item.name === 'short').flag ? classes.drink_image_choosed : ""}/>
                            <div className={classes.text_under_image}>
                                <p><b>Short</b></p>
                                <p>8 fl oz</p>
                            </div>
                        </div>
                        <div className={classes.drink_image}>
                            <img src="https://www.starbucks.com/app-assets/8f80d6b33459b4fada562d0c76fe0880.svg"
                                 alt="ghg" id="tall" onClick={choiceSizeHandler}
                                 className={isChoosed.find(item => item.name === 'tall').flag ? classes.drink_image_choosed : ""}/>
                            <div className={classes.text_under_image}>
                                <p><b>Tall</b></p>
                                <p>12 fl oz</p>
                            </div>
                        </div>
                        <div className={classes.drink_image}>
                            <img src="https://www.starbucks.com/app-assets/f1c3892d2d28cade899a1b6bd4ca5684.svg"
                                 alt="zz" id="grande" onClick={choiceSizeHandler}
                                 className={isChoosed.find(item => item.name === 'grande').flag ? classes.drink_image_choosed : ""}/>
                            <div className={classes.text_under_image}>
                                <p><b>Grande</b></p>
                                <p>16 fl oz</p>
                            </div>
                        </div>
                        <div className={classes.drink_image}>
                            <img src="https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f09a631489b294.svg"
                                 alt="b" id="venti" onClick={choiceSizeHandler}
                                 className={isChoosed.find(item => item.name === 'venti').flag ? classes.drink_image_choosed : ""}/>
                            <div className={classes.text_under_image}>
                                <p><b>Venti</b></p>
                                <p>20 fl oz</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={classes.options__container}>
                    <div className={`${classes.size__options_header} ${classes.high_resolution__display}`}>
                        <h3>Size options</h3>
                        <div className={classes.size__options_interline}></div>
                    </div>
                    <div className={`${classes.options__card__container} ${classes.high_resolution__display}`}>
                        <select className={classes.select__input}>
                            <option>Grande 16 fl oz</option>
                            <option>Kids 8fl oz</option>
                            <option>Short 8 fl oz</option>
                            <option>Tall 12 fl oz</option>
                            <option>Grande 16fl oz</option>
                        </select>
                    </div>
                    <div className={classes.size__options_header}>
                        <h3>Customizations</h3>
                        <div className={classes.size__options_interline}></div>
                    </div>
                    <div className={classes.customize__container} onClick={toggleModalHandler}>
                        <ul className={classes.list}>
                            <li>2% Milk</li>
                            <li>Milk Foam</li>
                            <div className={classes.row}>
                                <li>Steamed Hot</li>
                                <li>Edit</li>
                            </div>
                        </ul>
                    </div>
                    <div className={classes.customize__container} onClick={toggleModalHandler}>
                        <ul className={classes.list}>
                            <li>4 pump(s) Peppermint Syrup</li>
                            <div className={classes.row}>
                                <li>4 pump(s) Mocha Sauce</li>
                                <li>Edit</li>
                            </div>
                        </ul>
                    </div>
                    <div className={classes.customize__container} onClick={toggleModalHandler}>
                        <ul className={classes.list}>
                            <li>Light Caramel Brulee Topping</li>
                            <li>Chocolate Curls Topping</li>
                            <div className={classes.row}>
                                <li>Whipped Cream</li>
                                <li>Edit</li>
                            </div>
                        </ul>
                    </div>
                    <div className={classes.customize__container} onClick={toggleModalHandler}>
                        <ul className={classes.list}>
                            <div className={classes.row}>
                                <li>Sweeteners</li>
                                <li>Edit</li>
                            </div>
                        </ul>
                    </div>
                    <div className={classes.customize__container} onClick={toggleModalHandler}>
                        <ul className={classes.list}>
                            <div className={classes.row}>
                                <li>Line the Cup with Mocha Sauce</li>
                                <li>Edit</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className={classes.full_nutrition__container}>
                    <div className={classes.full_nutrition__in__container}>
                        <div className={classes.stars__container}>
                            150★ item
                        </div>
                        <div className={classes.full_nutrition__text}>
                            <p>A big welcome back to our classic holiday hot chocolate—lovingly made with chocolaty
                                mocha
                                sauce,
                                peppermint-flavored syrup and steamed milk and sweetly topped with whipped cream and
                                dark-chocolate curls.
                            </p>
                        </div>
                        <div className={classes.full_nutrition__ingredients}>
                            <p>{location.state.item.calories} calories, 56g sugar, 16g fat</p>
                        </div>
                        <div className={classes.full_nutrition_btn__container}>
                            <button>Full nutrition & ingredients list</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>

        </>
    )
}

export default Product;