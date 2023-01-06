import classes from "./StarQuestions.module.css";

function StarQuestions() {
    return (
        <div className={classes.section8Container}>
            <div className={classes.section8__StarCodes}>
                <div className={classes.section8__StarCodes_header}>
                    <h2>Star Codes</h2>
                    <p>Yesssss. You've got Stars in your hand. Enter your code here and we'll add Stars to your account.</p>
                </div>
                <div className={classes.section8__StarCodes_InpandBtn}>
                    <input type="text" placeholder="* Enter your Star Code" />
                    <div className={classes.sec8__btn_container}>
                        <button className={classes.section8__StarCodes_btn}>Submit</button>
                    </div>
                </div>
            </div>
            <div className={classes.section8__under__header}>
                <h2>Questions?</h2>
                <p>We want to help in any way we can. You can ask your barista anytime or we've answered the most commonly asked questions
                    <span className={classes.greenSpan}> right over here</span>.
                </p>
            </div>
        </div>
    )
}
export default StarQuestions;