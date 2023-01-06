import drink1 from "../pages/Menu/Menu_images/menu_img1.webp";
import drink2 from "../pages/Menu/Menu_images/menu_img2.webp";
import drink3 from "../pages/Menu/Menu_images/menu_img3.webp";
import drink4 from "../pages/Menu/Menu_images/menu_img4.webp";
import drink5 from "../pages/Menu/Menu_images/menu_img5.webp";
import drink6 from "../pages/Menu/Menu_images/menu_img6.webp";
// import drink7 from "../Menu/Menu_images/menu_img7.webp";
import espresso_con_panna from "../pages/Menu/Menu_images/espresso_con_panna.webp";
import espresso from "../pages/Menu/Menu_images/espresso.webp";
import flat_white from "../pages/Menu/Menu_images/flat_white.webp";
import appleCrisp from "../pages/Menu/Menu_images/appleCrisp.webp";
import chai_tea from "../pages/Menu/Menu_images/chai_tea.webp";
import clouds_tea from "../pages/Menu/Menu_images/choluds_mist.webp";
import chai_tea_latte from "../pages/Menu/Menu_images/chai_tea_latte.webp";
import citrus_mint from "../pages/Menu/Menu_images/citrus_mint.webp";
import citrus_mint_q from "../pages/Menu/Menu_images/citrus_mint_q.webp";
import hotDrink from "../pages/Menu/Menu_images/hotDrink.webp";
import brew from "../pages/Menu/Menu_images/brew.webp";
import frappucinox from "../pages/Menu/Menu_images/frappucino.webp";
import icedtea from "../pages/Menu/Menu_images/icedTea.webp";
import milk from "../pages/Menu/Menu_images/milk.webp";
import juice from "../pages/Menu/Menu_images/juice.webp";
// import food1 from "../Menu/Menu_images/food_img1.webp";
// import food2 from "../Menu/Menu_images/food_img2.webp";
// import food3 from "../Menu/Menu_images/food_img3.webp";
// import food4 from "../Menu/Menu_images/food_img4.webp";
// import food5 from "../Menu/Menu_images/food_img5.webp";
// import athome from "../Menu/Menu_images/athome_img1.webp";
// import athome2 from "../Menu/Menu_images/athome_img3.webp";
// import merchan1 from "../Menu/Menu_images/merchan_img1.webp";
// import merchan2 from "../Menu/Menu_images/merchan_img2.webp";
// import merchan3 from "../Menu/Menu_images/merchan_img3.webp";
// import gift1 from "../Menu/Menu_images/gift_card_img1.webp";
// import gift2 from "../Menu/Menu_images/gift_card_img2.webp";
// import gift3 from "../Menu/Menu_images/gift_card_img3.webp";


import {configureStore, createSlice} from "@reduxjs/toolkit";

const items = [
    {
        header: ['hotCoffees', 'hotTeas', 'coldCoffees', 'coldDrinks', 'frappucino', 'icedTeas', 'hotDrinks']
    },
    {
        types: [
            {
                hotCoffees: [
                    'Americanos', 'Brewed Coffees', 'Cappuccinos', 'Espresso Shots', 'Flat Whites', 'Lattes', 'Macchiatos'
                ],
                hotTeas: [
                    'Chai Teas', 'Black Teas', 'Green Teas', 'Herbal Teas'
                ],
                hotDrinks: [
                    'Hot Chocolates', 'Juice', 'Steamers'
                ],
                frappucino: [
                    'Coffee Frappuccino', 'Creme Frappuccino',
                ],
                coldCoffees: [
                    'Cold Brews', 'Nitro Cold Brews', 'Iced Americano', 'Iced Coffees'
                ],
                icedTeas: [
                    'Bottled Teas', 'Iced Black Teas', 'Iced Chai Teas'
                ],
                coldDrinks: [
                    'Starbucks Refreshers', 'Juice', 'Milk', 'Sparkling Water'
                ]
            }
        ]
    },

    {
        products: [
            {
                id: 1,
                type: 'Americanos',
                name: 'Caffe Americano',
                calories: 352,
                img: drink1,
            },
            {
                id: 2,
                type: 'Brewed Coffees',
                name: 'Veranda Blend',
                calories: 312,
                img: drink1,
            },
            {
                id: 3,
                type: 'Brewed Coffees',
                name: 'Caffe Misto',
                calories: 399,
                img: drink1,
            },
            {
                id: 4,
                type: 'Brewed Coffees',
                name: 'Featured Starbucks Dark Roast Coffee',
                calories: 422,
                img: drink1,
            },
            {
                id: 5,
                type: 'Brewed Coffees',
                name: 'Featured Medium Roast - Pike Place Roast',
                calories: 520,
                img: drink1,
            },
            {
                id: 6,
                type: 'Brewed Coffees',
                name: 'Decaf Pike Place Roast',
                calories: 565,
                img: drink1,
            },
            {
                id: 7,
                type: 'Cappuccinos',
                name: 'Cappuccino',
                calories: 510,

                img: drink2,
            },
            {
                id: 8,
                type: 'Espresso Shots',
                name: 'Espresso',
                calories: 520,

                img: espresso,
            },
            {
                id: 9,
                type: 'Espresso Shots',
                name: 'Espresso Con Panna',
                calories: 540,

                img: espresso_con_panna,
            },
            {
                id: 10,
                type: 'Flat Whites',
                name: 'Flat White',
                calories: 530,

                img: flat_white,
            },
            {
                id: 11,
                type: 'Flat Whites',
                name: 'Honey Almondmilk Flat White',
                calories: 520,

                img: flat_white,
            },
            {
                id: 12,
                type: 'Lattes',
                name: 'Pumpkin Spice Latte',
                calories: 510,

                img: drink3,
            },
            {
                id: 13,
                type: 'Lattes',
                name: 'Caramel Brulee Latte',
                calories: 590,

                img: drink3,
            },
            {
                id: 14,
                type: 'Lattes',
                name: 'Chestnut Praline Latte',
                calories: 580,

                img: drink3,
            },
            {
                id: 15,
                type: 'Lattes',
                name: 'Sugar Cookie Almondmilk Latte',
                calories: 570,

                img: drink3,
            },
            {
                id: 16,
                type: 'Lattes',
                name: 'Caffe Latte',
                calories: 550,
                img: drink4,
            },
            {
                id: 17,
                type: 'Lattes',
                name: 'Cinnamon Dolce Latte',
                calories: 520,

                img: drink4,
            },
            {
                id: 18,
                type: 'Lattes',
                name: 'Starbucks Reserve Latte',
                calories: 510,

                img: drink6,
            },
            {
                id: 19,
                type: 'Lattes',
                name: 'Starbucks Reserve Hazelnut Bianco Latte',
                calories: 510,

                img: drink5,
            },
            {
                id: 20,
                type: 'Macchiatos',
                name: 'Apple Crisp Oatmilk Macchiato',
                calories: 470,

                img: appleCrisp,
            },
            {
                id: 21,
                type: 'Macchiatos',
                name: 'Caramel Macchiato',
                calories: 240,

                img: appleCrisp,
            },
            {
                id: 22,
                type: 'Macchiatos',
                name: 'Espresso Macchiato',
                calories: 230,

                img: appleCrisp,
            },
            {
                id: 23,
                type: "Chai Teas",
                name: "Chai Tea Latte",
                calories: 220,

                img: chai_tea_latte,
            },
            {
                id: 24,
                type: "Chai Teas",
                name: "Chai Tea",
                calories: 210,

                img: chai_tea
            },
            {
                id: 25,
                type: "Black Teas",
                name: "Earl Grey Tea",
                calories: 200,

                img: clouds_tea
            },
            {
                id: 26,
                type: "Black Teas",
                name: "Teavana London Fog Tea Latte",
                calories: 190,

                img: clouds_tea
            },
            {
                id: 27,
                type: "Black Teas",
                name: "Royal English Breakfast Tea",
                calories: 180,

                img: chai_tea
            },
            {
                id: 28,
                type: "Black Teas",
                name: "Royal English Breakfast Tea Latte",
                calories: 170,

                img: chai_tea_latte,
            },
            {
                id: 29,
                type: "Green Teas",
                name: "Emperor’s Clouds & Mist",
                calories: 160,

                img: citrus_mint,
            },
            {
                id: 30,
                type: "Green Teas",
                name: "Matcha Tea Latte",
                calories: 160,

                img: citrus_mint,
            },
            {
                id: 31,
                type: "Green Teas",
                name: "Honey Citrus Mint Tea",
                calories: 150,

                img: citrus_mint,
            },
            {
                id: 32,
                type: "Green Teas",
                name: "Honey Citrus Mint Tea",
                calories: 290,

                img: clouds_tea,
            },
            {
                id: 33,
                type: "Green Teas",
                name: "Honey Citrus Mint Tea",
                calories: 280,

                img: citrus_mint,
            },
            {
                id: 34,
                type: "Herbal Teas",
                name: "Mint Majesty®",
                calories: 270,

                img: citrus_mint_q,
            },
            {
                id: 35,
                type: "Herbal Teas",
                name: "Peach Tranquility",
                calories: 2600,

                img: citrus_mint_q,
            },
            {
                id: 36,
                type: "Hot Chocolates",
                name: "Peppermint Hot Chocolate",
                calories: 250,

                img: hotDrink,
            },
            {
                id: 37,
                type: "Hot Chocolates",
                name: "Peppermint White Hot Chocolate",
                calories: 240,

                img: hotDrink,
            },
            {
                id: 38,
                type: "Hot Chocolates",
                name: "Hot Chocolate",
                calories: 230,

                img: hotDrink,
            },
            {
                id: 39,
                type: "Juice",
                name: "Caramel Apple Spice",
                calories: 220,

                img: hotDrink,
            },
            {
                id: 40,
                type: "Juice",
                name: "Streamed Apple Juice",
                calories: 210,

                img: hotDrink,
            },
            {
                id: 41,
                type: "Steamers",
                name: "Pumpkin Spice Creme",
                calories: 200,

                img: hotDrink,
            },
            {
                id: 42,
                type: "Steamers",
                name: "Caramel Brulee Creme",
                calories: 450,

                img: hotDrink,
            },
            {
                id: 43,
                type: "Steamers",
                name: "Chestnut Praline Latte",
                calories: 470,

                img: hotDrink,
            },
            {
                id: 44,
                type: "Coffee Frappuccino",
                name: "Pumpkin Spice Creme",
                calories: 490,

                img: frappucinox,
            },
            {
                id: 45,
                type: "Creme Frappuccino",
                name: "Blended Beverage",
                calories: 230,

                img: frappucinox,
            },
            {
                id: 46,
                type: "Cold Brews",
                name: "Pumpkin Cream Cold Brew",
                calories: 220,

                img: brew,
            },
            {
                id: 47,
                type: "Nitro Cold Brews",
                name: "Nitro Cold Brew",
                calories: 210,

                img: brew,
            },
            {
                id: 48,
                type: "Iced Americano",
                name: "Iced Caffe Americano",
                calories: 450,

                img: brew,
            },
            {
                id: 49,
                type: "Iced Coffees",
                name: "Iced Coffee",
                calories: 320,

                img: brew,
            },


            {
                id: 50,
                type: "Bottled Teas",
                name: "Iced Teas",
                calories: 250,
                img: icedtea,
            },
            {
                id: 51,
                type: "Bottled Teas",
                name: "Iced Caffe",
                calories: 290,
                img: icedtea,
            },
            {
                id: 52,
                type: "Bottled Teas",
                name: "Iced juice",
                calories: 310,
                img: icedtea,
            },
            {
                id: 53,
                type: "Iced Black Teas",
                name: "Iced Black",
                calories: 320,

                img: icedtea,
            },
            {
                id: 54,
                type: "Iced Black Teas",
                name: "Iced Black 2",
                calories: 450,

                img: icedtea,
            },
            {
                id: 55,
                type: "Iced Black Teas",
                name: "Iced Black 3",
                calories: 440,

                img: icedtea,
            },
            {
                id: 56,
                type: "Iced Chai Teas",
                name: "Iced Chai Teas 2",
                calories: 430,

                img: icedtea,
            },
            {
                id: 57,
                type: "Iced Chai Teas",
                name: "Iced Chai Teas 3",
                calories: 420,

                img: icedtea,
            },
            {
                id: 58,
                type: "Iced Chai Teas",
                name: "Iced Chai Teas 4",
                calories: 410,

                img: icedtea,
            },


            {
                id: 59,
                type: "Starbucks Refreshers",
                name: "Starbucks Refreshers 1",
                calories: 380,

                img: icedtea,
            },
            {
                id: 60,
                type: "Starbucks Refreshers",
                name: "Starbucks Refreshers 2",
                calories: 390,

                img: icedtea,
            },
            {
                id: 61,
                type: "Juice",
                name: "Juice 1",
                calories: 300,

                img: juice,
            },
            {
                id: 62,
                type: "Juice",
                name: "Juice 2",
                calories: 320,

                img: juice,
            },
            {
                id: 63,
                type: "Milk",
                name: "Milk 1",
                calories: 390,

                img: milk,
            },
            {
                id: 64,
                type: "Milk",
                name: "Milk2",
                calories: 380,

                img: milk,
            },
            {
                id: 65,
                type: "Sparkling Water",
                name: "Sparkling Water 1",
                calories: 370,

                img: icedtea,
            },
            {
                id: 66,
                type: "Sparkling Water",
                name: "Sparkling Water 2",
                calories: 360,
                img: icedtea,
            },

        ]
    }

]

const productsSlice = createSlice({
    name: 'products',
    initialState: items,
    reducers: {
        addCustomization(state, action) {
            console.log(action.payload);
        }
    }
});

const store = configureStore({
    // reducer: { products: productsSlice.reducer} // in case I've more than one reducer
    reducer: productsSlice.reducer
})

export const productsActions = productsSlice.actions;
export default store;