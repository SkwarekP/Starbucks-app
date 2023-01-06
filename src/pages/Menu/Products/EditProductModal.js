import classes from "./EditProductModal.module.css";
import ReactDOM from "react-dom";
import {useState} from "react";

function EditProduct(props) {

    const ModalOverlay = () => {
        const [counters, setCounters] = useState([
            {name: "Add Apple Brown Sugar", value: 0},
            {name: "Add Brown Sugar Syrup", value: 0},
            {name: "Add Caramel Syrup", value: 0},
            {name: "Add Chestnut Praline Syrup", value: 0},
            {name: "Add Cinnamon Dolce Syrup", value: 0},
            {name: "Add Hazelnut Syrup", value: 0},
            {name: "Add Irish Cream Syrup", value: 0},
            {name: "Add Peppermint Syrup", value: 0},
            {name: "Add Raspberry Syrup", value: 0},
            {name: "Add Toasted Vanilla Syrup", value: 0},
            {name: "Add Toffee Nut Syrup", value: 0},
            {name: "Add Vanilla Syrup", value: 0},
            {name: "Add Sugar Free Vanilla Syrup", value: 0},
            {name: "Add Sugar Cookie Syrup", value: 0},
            {name: "Add Caramel Brulée Sauce", value: 0},
            {name: "Add Mocha Sauce", value: 0},
            {name: "Add New Dark Caramel Sauce", value: 0},
            {name: "Add Pumpkin Sauce", value: 0},
            {name: "Add Toasted White Chocolate Mocha Sauce", value: 0},
            {name: "Add White Chocolate Mocha Sauce", value: 0},

        ])
        const [showResetFlag, setShowResetFlag] = useState(false);

        const incrementCounter = (event) => {
            setShowResetFlag(true);
            const name = event.target.name;
            const updateState = counters.map(item => {
                if (item.name === name) {
                    return {...item, value: item.value + 1}
                }
                return {...item}
            })
            setCounters(updateState);
        }

        const decrementCounter = (event) => {
            const name = event.target.name;
            const filter = counters.filter(item => item.value === 0);
            const current = counters.find(item => item.name === name);
            if (filter.length === counters.length - 1 && current.value <= 1) {
                setShowResetFlag(false);
            }
            const updateState = counters.map(item => {
                if (item.name === name) {
                    return {...item, value: item.value - 1};
                }

                return {...item};
            })

            setCounters(updateState);
        }

        const resetHandler = () => {
            const onUpdateState = counters.map(item => {
                return {...item, value: item.value = 0}
            })
            setCounters(onUpdateState);
            setShowResetFlag(false);
        }

        const sendDataHandler = () => {
            const data = counters.filter(item => item.value !== 0)
            props.onReceive(data);
        }

        return (
            <div className={classes.modal__container}>
                <div className={classes.flavors}>
                    <h1>Flavors</h1>
                    {showResetFlag && <button className={classes.reset__btn} onClick={resetHandler}>Reset</button>}
                    <div className={classes.close__modal} onClick={props.onClose}></div>
                </div>
                <div className={classes.title}>
                    <h5>Syrups</h5>
                </div>
                <div className={classes.content}>
                    {counters.map(item => (
                        <div key={item.id} className={classes.edit__single__card}>
                            <p key={item.name}>{item.name}</p>
                            <div className={classes.row}>
                                {item.value > 0 && <button key={item.name} className={classes.plus__button} onClick={decrementCounter}
                                                           name={item.name}>-</button>}
                                {item.value > 0 && <p key={item.value} className={classes.counter}>{item.value}</p>}
                                <button className={classes.plus__button} onClick={incrementCounter} name={item.name}>+
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className={classes.title}>
                    <h5>Sauces</h5>
                </div>
                <div className={classes.content}>
                    <div className={classes.edit__single__card}>
                        <p>Add Caramel Brulée Sauce</p>
                        <button className={classes.plus__button}>+</button>
                    </div>
                    <div className={classes.edit__single__card}>
                        <p>Add Mocha Sauce</p>
                        <button className={classes.plus__button}>+</button>
                    </div>
                    <div className={classes.edit__single__card}>
                        <p>Add New Dark Caramel Sauce</p>
                        <button className={classes.plus__button}>+</button>
                    </div>
                    <div className={classes.edit__single__card}>
                        <p>Add Pumpkin Sauce</p>
                        <button className={classes.plus__button}>+</button>
                    </div>
                    <div className={classes.edit__single__card}>
                        <p>Add Toasted White Chocolate Mocha Sauce</p>
                        <button className={classes.plus__button}>+</button>
                    </div>
                    <div className={classes.edit__single__card}>
                        <p>Add White Chocolate Mocha Sauce</p>
                        <button className={classes.plus__button}>+</button>
                    </div>
                </div> */}
                <div className={classes.modal__btn__done__container}>
                    <button className={classes.modal__btn_done} onClick={sendDataHandler}
                            disabled={!showResetFlag}>Done
                    </button>
                </div>
            </div>
        )
    }

    const ModalBackdrop = () => {
        return <div className={classes.backdrop} onClick={props.onClose}></div>
    }

    return (
        <>
            {ReactDOM.createPortal(<ModalOverlay/>, document.getElementById("overlay-root"))}
            {ReactDOM.createPortal(<ModalBackdrop onClose={props.onClose}/>, document.getElementById("backdrop-root"))}
        </>
    )
}

export default EditProduct;
