import classes from "./GetFavorites.module.css";
import star_icon from "../../Images/bxs-star.svg";

function GetFavorites(){
    return (
        <div className={classes.section4Container}>
            <h1>Get your favorites for free</h1>
            <div className={classes.section4Nav}>
                <li>25<img src={star_icon} alt="star" /></li>
                <li>50<img src={star_icon} alt="star" /></li>
                <li>150<img src={star_icon} alt="star" /></li>
                <li>200<img src={star_icon} alt="star" /></li>
                <li>400<img src={star_icon} alt="star" /></li>
            </div>
        </div>
    )
}
export default GetFavorites;