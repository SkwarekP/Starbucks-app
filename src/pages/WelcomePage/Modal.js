import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';
import {useCallback, useEffect} from "react";

function Modal(props) {

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            props.onClose();
        }
        if (event.key === "Tab") {
            event.preventDefault();
        }
    }, [props])

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [escFunction])

    const closeModal = () => {
        props.onClose();
    }

    const Overlay = () => {
        return (
            <div className={classes.modal__container}>
                <header className={classes.modal__header}>
                    <p>Are you sure ?</p>
                    <button className={classes.modal__btn_X} onClick={closeModal}>X</button>
                </header>
                <div className={classes.modal__text}>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hie qui id repudiandate autem cum voluptates odit modi esse est non!</span>
                </div>
                <div className={classes.modal__btns}>
                    <button className={`${classes.modal__btn} ${classes.modal__btn_confirm}`}>Confirm</button>
                    <button className={`${classes.modal__btn} ${classes.modal__btn_close}`}
                            onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        )
    }

    const Backdrop = (props) => {
        return <div className={classes.backdrop} onClick={props.onClose}></div>
    }

    return (
        <>
            {ReactDOM.createPortal(<Overlay onClose={props.onClose}/>, document.getElementById('overlay-root'))}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop-root'))}
        </>

    )
}

export default Modal;