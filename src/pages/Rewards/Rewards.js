import "./Rewards.module.css";
import Header from "./components/Section1/Header";
import Title from "./components/Section2/Title";
import GettingStarted from "./components/Section3/GettingStarted";
import GetFavorites from "./components/Section4/GetFavorites";
import CustomizeDrink from "./components/Section5/CustomizeDrink";
import EndlessExtras from "./components/Section6/EndlessExtras";
import CashOrCard from "./components/Section7/CashOrCard";
import StarQuestions from "./components/Section8/StarQuestions";
import UnderFooter from "./components/Section9/UnderFooter";
import Footer from "./components/Section10/Footer";
import Header2 from "./components/Section1/Header2";

function Rewards() {

    return (
        <>
            <section>
                <Header/>
                <Header2/>
            </section>
            <section>
                <Title/>
            </section>
            <section>
                <GettingStarted/>
            </section>
            <section>
                <GetFavorites/>
            </section>
            <section>
                <CustomizeDrink/>
            </section>
            <section>
                <EndlessExtras/>
            </section>
            <section>
                <CashOrCard/>
            </section>
            <section>
                <StarQuestions/>
            </section>
            <section>
                <UnderFooter/>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Rewards;