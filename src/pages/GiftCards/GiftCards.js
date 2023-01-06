import classes from "./GiftCards.module.css"
import Header from "../Rewards/components/Section1/Header";
import card1 from "./images/card1.webp";
import card2 from "./images/card2.webp";
import card3 from "./images/card3.webp";
import card4 from "./images/card4.jpg";
import card7 from "./images/card7.jpg";
import card8 from "./images/card8.jpg";
import card9 from "./images/card9.jpg";
import card10 from "./images/card10.jpg";
import card11 from "./images/card11.jpg";
import card12 from "./images/card12.jpg";
import card13 from "./images/card13.jpg";
import card14 from "./images/card14.jpg";
import card15 from "./images/card15.jpg";
import card16 from "./images/card16.jpg";
import card17 from "./images/card17.jpg";
import card18 from "./images/card18.jpg";
import card19 from "./images/card19.jpg";
import card20 from "./images/card20.jpg";
import card21 from "./images/card21.jpg";
import card22 from "./images/card22.jpg";
import card23 from "./images/card23.jpg";
import bulkgift from "./images/bulkgift.webp";
import card_fhd from "./images/card_fhd.jpg";
import card_fhd2 from "./images/card_fhd2.jpg";
import card_fhd3 from "./images/card_fhd3.jpg";
import card_fhd4 from "./images/card_fhd4.jpg";
import card_fhd5 from "./images/card_fhd5.jpg";
import card_fhd7 from "./images/card_fhd7.jpg";
import card_fhd8 from "./images/card_fhd8.jpg";
import card_fhd9 from "./images/card_fhd9.jpg";
import card_fhd10 from "./images/card_fhd910.jpg";


import Footer from "../Rewards/components/Section10/Footer";

function GiftCards() {

    return (
        <>
            <section>
                <Header />
            </section>
            <section>
                <div className={classes.cards__container}>
                    <div className={classes.cards__headers__flex}>
                        <h2>Featured</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card1} alt="card" />
                        <img src={card2} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd} alt="card3" className={classes.fhd__img} />
                    </div>
                </div>
            </section>
            <section>
                <div className={classes.section3__container}>
                    <div className={classes.section3__header}>
                        <h2>Got a gift card?</h2>
                        <p className={classes.p__sec3}>Earns 2* per $1</p>
                        <div className={classes.section3__desktop__flex}>
                            <p>Earns 2* per $1</p>
                            <button className={classes.add_or_reload__btn}>Add or Reload</button>
                            <button className={classes.check__balance__btn}>Check balance</button>
                        </div>
                    </div>
                    <div className={classes.section3__buttons_flex}>
                        <button className={classes.add_or_reload__btn}>Add or Reload</button>
                        <button className={classes.check__balance__btn}>Check balance</button>
                    </div>
                    <div className={classes.section3__footer}>
                        <h4>Card Terms & Conditions</h4>
                    </div>
                </div>
                    <div className={classes.section3__desktop__container}>
                        <div className={classes.section3__header}>
                            <h2>Got a gift card?</h2>
                        </div>
                        <div className={classes.section3__header}>
                            <p>Earns 2* per $1</p>
                        </div>
                        <div className={classes.section3__buttons_flex}>
                            <button className={classes.add_or_reload__btn}>Add or Reload</button>
                            <button className={classes.check__balance__btn}>Check balance</button>
                        </div>
                        <div className={classes.section3__footer}>
                            <h4>Card Terms & Conditions</h4>
                        </div>
                    </div>
            </section>
            <section>
                <div className={classes.cards__container}>
                    <div className={classes.cards__headers__flex}>
                        <h2>ThanksGiving</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card3} alt="card" />
                        <img src={card4} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd2} alt="card3" className={classes.fhd__img} />

                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Red Cup</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card1} alt="card" />
                        <img src={card2} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd3} alt="card3" className={classes.fhd__img} />
                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Spirited</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card7} alt="card" />
                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Birthday</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card8} alt="card" />
                        <img src={card9} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd4} alt="card3" className={classes.fhd__img} />

                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Thank You</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card10} alt="card" />
                        <img src={card11} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd5} alt="card3" className={classes.fhd__img} />

                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Celebration</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card12} alt="card" />
                        <img src={card13} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Appreciation</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card14} alt="card" />
                        <img src={card15} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd7} alt="card3" className={classes.fhd__img} />
                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>WorkPlace</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card16} alt="card" />
                        <img src={card17} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd8} alt="card3" className={classes.fhd__img} />
                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Encouragement</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card18} alt="card" />
                        <img src={card19} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd9} alt="card3" className={classes.fhd__img} />
                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Affection</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card20} alt="card" />
                        <img src={card21} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd10} alt="card3" className={classes.fhd__img} />

                    </div>
                    <div className={classes.cards__headers__flex}>
                        <h2>Anytime</h2>
                        <h3>See all</h3>
                    </div>
                    <div className={classes.cards__images}>
                        <img src={card22} alt="card" />
                        <img src={card23} alt="card2" />
                        <img src={card7} alt="card" className={classes.tablet__img} />
                        <img src={card_fhd10} alt="card3" className={classes.fhd__img} />
                    </div>
                </div>
            </section>
            <section>
                <div className={classes.section4__container}>
                    <div className={classes.section4__img}>
                        <img src={bulkgift} alt="bulk" />
                    </div>
                    <div className={classes.section4__text}>
                        <h2>Gift Cards in Bulk</h2>
                        <p>There's an easier way to buy Starbucks Cards in bulk! Give a Starbucks Card to gift, reward, incentivize, or show appreciation towards your customers, clients and team members</p>
                        <button className={classes.section4__btn}>Shop now</button>
                    </div>
                </div>
            </section>
            <section>
                <div className={classes.section5__container}>
                    <div className={classes.section5__header}>
                        <h4>Gift Card Support</h4>
                        <p>Use the links below to manage eGifts you have sent or received, or view our full Card Terms & Conditions</p>
                    </div>
                    <div className={classes.section5__buttons}>
                        <div>
                            <button className={classes.section5__btn}>eGift Support</button>
                        </div>
                        <div>
                            <button className={classes.section5__btn}>See Terms & Conditions</button>
                        </div>
                        <div>
                            <button className={classes.section5__btn}>eGift FAQs</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default GiftCards;