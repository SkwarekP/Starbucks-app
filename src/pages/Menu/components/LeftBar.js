import classes from "../Menu.module.css";
import {useNavigate} from "react-router-dom";

function LeftBar(props) {
    const navigate = useNavigate();

    const navigateHandler = (event) => {
        event.preventDefault();
        navigate(`/Menu/Drink/${event.target.id}`, {state: {products: props.products}});
    }

    return (
        <div className={classes.large__size__resolution}>
            <div className={classes.large__size__menu__next}>
                <h3>Drinks</h3>
                <li onClick={navigateHandler} id="hotCoffees">Hot Coffees</li>
                <li onClick={navigateHandler} id="hotTeas">Hot Teas</li>
                <li onClick={navigateHandler} id="hotDrinks">Hot Drinks</li>
                <li onClick={navigateHandler} id="frappucino">Frappuccino® <br/> Blended Beverages
                </li>
                <li onClick={navigateHandler} id="coldCoffees">Cold Coffees</li>
                <li onClick={navigateHandler} id="icedTeas">Iced Teas</li>
                <li onClick={navigateHandler} id="coldDrinks">Cold Drinks</li>
            </div>
            {/*<div className={classes.large__size__menu__next}>
                <h3>Food</h3>
                <li>Hot Breakfast</li>
                <li>Bakery</li>
                <li>Lunch</li>
                <li>Snacks & Sweets</li>
                <li>Oatmeal & Yogurt</li>
            </div>
            <div className={classes.large__size__menu__next}>
                <h3>At Home Coffee</h3>
                <li>Whole Bean</li>
                <li>Ground</li>
                <li>VIA Instant</li>
            </div>
            <div className={classes.large__size__menu__next}>
                <h3>Merchandise</h3>
                <li>Cold Cups</li>
                <li>Tumblers</li>
                <li>Other</li>
            </div>
            <div className={classes.large__size__menu__next}>
                <h3>Gift Cards</h3>
                <li>Happy Birthday</li>
                <li>Thank You</li>
                <li>Traditional</li>
            </div>*/}
        </div>
    )
}

export default LeftBar;