import Header from "../Rewards/components/Section1/Header";
import NavMenu from "./components/NavMenu";
import classes from "./Menu.module.css";
import classes2 from "./MenuItem.module.css"
import LeftBar from "./components/LeftBar";
import Footer from "../Rewards/components/Section10/Footer";
import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function MenuItem() {
    const location = useLocation();
    const navigate = useNavigate();
    const [productss, setProductss] = useState([]);
    const [types, setTypes] = useState([]);
    const params = useParams();

    useEffect(() => {
        const types = location.state.products.find(el => el.types)
        const typesList = types.types;
        const foundTypes = typesList[0][params.namePath];
        const foundProducts = location.state.products.find(item => item.products);
        setProductss(foundProducts.products);
        setTypes(foundTypes);

        return () => {
            setProductss([])
            setTypes([])
            console.log("CLEANUP")
        }

    }, [location.state.products, params.namePath])
    return (
        <>
            <section>
                <Header/>
            </section>
            <section>
                <NavMenu/>
            </section>
            <section className={classes.large__size__resolution__leftbar__flex}>
                <LeftBar products={location.state.products}/>
                <section>
                    <div className={classes.section3__menu__container}>
                        <div className={classes.section2Container}>
                            <h4>Menu/Drink/{params.namePath}</h4>
                        </div>
                        <div className={classes2.header}>
                            <h2>{params.namePath}</h2>
                        </div>
                        {types.map((type, index) => (
                            <div key={index}>
                                <div className={classes2.title}>
                                    <h3 key={index}>{type}</h3>
                                </div>
                                <div className={classes.interline}></div>
                                <div className={classes2.row}>
                                    {productss.map((item) => {
                                        if (item.type === type)
                                            return (
                                                <div key={item.id} className={classes2.single__item}>
                                                    <img src={item.img} className={classes2.img}
                                                         alt="drink"
                                                         onClick={() => navigate(`/Menu/Product/${item.id}`, {state: {item}})}/>
                                                    <p>{item.name}</p>
                                                </div>
                                            )
                                        return null;
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            <section className={classes.footer}>
                <Footer/>
            </section>
        </>
    )
}

export default MenuItem;