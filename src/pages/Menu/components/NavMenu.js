import classes from "../Menu.module.css";

function NavMenu() {

    return (
        <div className={classes.navContainer}>
            <nav className={classes.flexNav}>
                <li>All products</li>
                <li>Featured</li>
                <li>Previous Orders</li>
                <li>Favorite Products</li>
            </nav>
        </div>
    )
}

export default NavMenu;