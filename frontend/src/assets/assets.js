import logo from './Logo.png'
import basket from './basket.jpg'
import menu_1 from './menu_1.jpg'
import menu_2 from './menu_2.jpg'
import menu_3 from './menu_3.jpg'
import menu_4 from './menu_4.jpg'
import menu_5 from './menu_5.jpg'
import menu_6 from './menu_6.jpg'
import menu_7 from './menu_7.jpg'
import menu_8 from './menu_8.jpg'
import ckbiriyani from './biriyani1.jpg'
import vegbiriyani from './biriyani2.jpg'
import pwbiriyani from './biriyani3.jpg'
import desert1 from './desert1.jpg'
import desert2 from './desert2.jpg'
import desert3 from './desert3.jpg'
import ckmeal from './meal1.jpg'
import vegmeal from './meal2.jpg'
import ckmomo from './momo1.jpg'
import vegmomo from './momo2.jpg'
import ckpasta from './pasta1.jpg'
import vegpasta from './pasta2.jpg'
import ramen from './ramen.jpg'
import ckrice from './rice1.jpg'
import vegrice from './rice2.jpg'
import ckroll from './roll1.jpg'
import vegroll from './roll2.jpg'
import cksalad from './salad1.jpg'
import vegsalad from './salad2.jpg'
import rating_starts from './rating.png'
import parcel from "./parcel.png"
export const assets={
    logo,
    basket,
    rating_starts,
    parcel
}
export const menu_list=[
    {
        menu_name:"Roll",
        menu_image:menu_1
    },
    {
        menu_name:"Salad",
        menu_image:menu_2
    },
    {
        menu_name:"Veg",
        menu_image:menu_3
    },
    {
        menu_name:"Pasta",
        menu_image:menu_4
    },
    {
        menu_name:"Desert",
        menu_image:menu_5
    },
    {
        menu_name:"Meals",
        menu_image:menu_6
    },
    {
        menu_name:"Biriyani",
        menu_image:menu_7
    },
    {
        menu_name:"Fried Rice",
        menu_image:menu_8
    }
]

export const food_list=[
    {
        _id:"1",
        name :"Chicken Biriyani",
        image:ckbiriyani,
        price:200,
        description:"Chicken Biriyani is a popular South Indian dish made with basmati rice,chicken, and spices.",
        category:"Biriyani"
    },
    {
        _id:"2",
        name :"Veg Biriyani",
        image:vegbiriyani,
        price:180,
        description:"Veg Biriyani is a popular South Indian dish made with basmati rice, vegitables and spices.",
        category:"Biriyani"
    },
    {
        _id:"3",
        name :"Prawn Biriyani",
        image:pwbiriyani,
        price:220,
        description:"Prawn Biriyani is a popular South Indian dish made with basmati rice, vegitables, prawns and spices.",

        category:"Biriyani"
    },
    {
        _id:"4",
        name :"Coconut Pudding",
        image:desert1,
        price:120,
        description:"Coconut pudding is a creamy, tropical dessert made with coconut milk and sweetened to perfection.",

        category:"Desert"
    },
    {
        _id:"5",
        name :"Heart Cream Cake",
        image:desert2,
        price:100,
        description:"Heart cream cake is a soft, luscious dessert, shaped like a heart and layered with smooth cream.",

        category:"Desert"
    },
    {
        _id:"6",
        name :"Honey Pan Cake",
        image:desert3,
        price:180,
        description:"Honey pancakes are fluffy, golden treats drizzled with natural honey for a sweet, delightful flavor.",

        category:"Desert"
    },
    {
        _id:"7",
        name :"Non veg Meals",
        image:ckmeal,
        price:180,
        description:"Non-veg meals offer a hearty serving of various meats, paired with flavorful sides for a satisfying feast",

        category:"Meals"
    },
    {
        _id:"8",
        name :"veg Meals",
        image:vegmeal,
        price:100,
        description:"veg meals offer a hearty serving of various vegies, paired with flavorful sides for a satisfying feast",

        category:"Meals"
    },
    {
        _id:"9",
        name :"Chicken MOMO",
        image:ckmomo,
        price:100,
        description:"Chicken momos are steamed dumplings filled with seasoned chicken, offering a tasty and savory bite.",

        category:"Momos"
    },
    {
        _id:"10",
        name :"Veg MOMO",
        image:vegmomo,
        price:80,
        description:"veg momos are steamed dumplings filled with seasoned vegies, offering a tasty and savory bite.",

        category:"Momos"
    },
    {
        _id:"11",
        name :"Chicken Pasta",
        image:ckpasta,
        price:180,
        description:"",

        category:"Pasta"
    },
    {
        _id:"12",
        name :"Veg Pasta",
        image:vegpasta,
        price:150,
        description:"",

        category:"Pasta"
    },
    {
        _id:"13",
        name :"Chicken Rice",
        image:ckrice,
        price:120,
        description:"",

        category:"Fried Rice"
    },
    {
        _id:"14",
        name :"Veg Rice",
        image:vegrice,
        price:100,
        description:"",

        category:"Fried Rice"
    },
    {
        _id:"15",
        name :"Chicken Roll",
        image:ckroll,
        price:100,
        description:"",

        category:"Roll"
    },
    {
        _id:"16",
        name :"Veg Roll",
        image:vegroll,
        price:80,
        description:"",

        category:"Roll"
    },
    {
        _id:"17",
        name :"Chicken Salad",
        image:cksalad,
        price:200,
        description:"",

        category:"Salad"
    },
    {
        _id:"18",
        name :"Veg Salad",
        image:vegsalad,
        price:180,
        description:"",

        category:"Salad"
    },

    
]
