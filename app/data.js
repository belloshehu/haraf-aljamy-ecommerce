import { FaHospital, FaMoneyBill, FaBroom } from "react-icons/fa";

export const carousel = [
  {
    message: "Your freshly baked bread makes my family happy day and night.",
    image: "/images/bread1.jpg",
  },

  {
    message: "Your freshly baked bread makes my family happy day and night.",
    image: "/images/bread1.jpg",
  },
];

export const products = [
  {
    id: "1212312",
    name: "Cake",
    status: "available",
    price: 1200,
    image: "/images/conf3.jpg",
    discount: 10,
    stock: 100,
  },

  {
    id: "1264432",
    name: "Bread",
    status: "available",
    price: 1200,
    image: "/images/bread1.jpg",
    discount: 12,
    stock: 13,
  },
  {
    id: "1234312",
    name: "Cake bread",
    status: "not available",
    price: 1200,
    image: "/images/bread4.jpg",
    discount: 5,
    stock: 10,
  },
  {
    id: "1200312",
    name: "Cake bread",
    status: "available",
    price: 1200,
    image: "/images/bread3.jpg",
    discount: 15,
    stock: 106,
  },
];

export const values = [
  {
    icon: <FaHospital />,
    title: "health",
    description:
      "All ingredients used in the production of our products are proven to be healthy for all consumers. ",
  },
  {
    icon: <FaBroom />,
    title: "hygiene",
    description:
      "Our products are produced under clean and hygienic environment and following standard production procedure.",
  },
  {
    icon: <FaMoneyBill />,
    title: "Affordability",
    description:
      "Despite mushrooming price of commodities, we strive to keep our prices as low as possible to make them affordable",
  },
];
