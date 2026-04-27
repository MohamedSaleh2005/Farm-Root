import product1 from "../images/p1.jpg";
import product2 from "../images/p2.jpg";
import product3 from "../images/p3.jpg";
import product4 from "../images/p4.jpg";
import product5 from "../images/p5.jpg";
import product6 from "../images/p6.jpg";
import product7 from "../images/p7.jpg";
import product8 from "../images/p8.jpg";
import product9 from "../images/p9.jpg";
import product10 from "../images/p10.jpg";
import product11 from "../images/p11.jpg";
import product12 from "../images/p12.jpg";
import product13 from "../images/p13.jpg";



const products = [
  {
    id: 1,
    image: product1,
    title: "Watermelon Juice",
    price: 39,
    category: "FOOD & DRINKS",
  },
  {
    id: 2,
    image: product2,
    title: "Mango Smoothie",
    price: 70,
    oldPrice: 85,
    discount: 17,
    category: "FOOD & DRINKS",
  },
  {
    id: 3,
    image: product3,
    title: "Grape Drink",
    price: 39,
    oldPrice: 55,
    discount: 29,
    category: "FOOD & DRINKS",
  },
  {
    id: 4,
    image: product4,
    title: "Orange Juice",
    price: 59,
    oldPrice: 35,
    discount: 20,
    category: "FOOD & DRINKS",
  },
  {
    id: 5,
    image: product5,
    title: "Organic Apple",
    price: 29,
    category: "FRESH FRUITS",
  },
  {
    id: 6,
    image: product6,
    title: "Strawberries",
    price: 49,
    oldPrice: 65,
    discount: 20,
    category: "FRESH FRUITS",
  },
  {
    id: 7,
    image: product7,
    title: "Pineapple",
    price: 59,
    discount: 12,
    category: "FRESH FRUITS",
  },
  {
    id: 8,
    image: product8,
    title: "Broccoli",
    price: 99,
    oldPrice: 115,
    discount: 17,
    category: "VEGETABLES",
  },
  {
    id: 9,
    image: product9,
    title: "Cucumber",
    price: 39,
    category: "VEGETABLES",
  },
  {
    id: 10,
    image: product10,
    title: "Spinach",
    price: 89,
    oldPrice: 145,
    discount: 14,
    category: "VEGETABLES",
  },
  {
    id: 11,
    image: product11,
    title: "Cauliflower",
    price: 79,
    discount: 9,
    category: "VEGETABLES",
  },
  {
    id: 12,
    image: product12,
    title: "Organic Walnuts",
    price: 39,
    oldPrice: 52,
    discount: 25,
    category: "DRIED FOODS & NUTS",
  },
  {
    id: 13,
    image: product12,
    title: "Organic Walnuts 0.5 KG",
    price: 28,
    oldPrice: 42,
    discount: 21,
    category: "DRIED FOODS & NUTS",
  },
  {
    id: 14,
    image: product13,
    title: "Raw Almonds",
    price: 33,
    oldPrice: 59,
    status: "soldout",
    category: "DRIED FOODS & NUTS",
  },

];

export default products;
