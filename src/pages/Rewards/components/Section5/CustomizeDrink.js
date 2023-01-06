import classes from "./CustomizeDrink.module.css";
import img025 from "../../Images/025.webp";

function CustomizeDrink() {
    return (
        <div className={classes.section5Container}>
            <div className={classes.section5Img}>
                <img src={img025} alt="025" />
            </div>
            <div className={classes.section5Text}>
                <h3>Customize your drink</h3>
                <p>Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>
            </div>
        </div>
    )
}
export default CustomizeDrink;