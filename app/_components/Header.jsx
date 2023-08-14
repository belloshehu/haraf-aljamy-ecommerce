"use client";

import Link from "next/link";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import NavItems from "./NavItem";
import Navbar from "./Navbar";
import { Inter, Poppins, Ubuntu, Pacifico, Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header className="bg-gradient-to-tr from-green-800 to-cyan-500 flex flex-row items-center w-full justify-between text-white  px-3 py-2 lg:py-5 lg:px-16">
      <div className="brand">
        <h1
          className={`${righteous.className} font-bold text-xl lg:text-3xl shadow-lg`}>
          Haraf Aljamay
        </h1>
      </div>
      <Navbar />
      <FaShoppingCart className="text-3xl text-green-500 place-self-end block lg:hidden" />
      <FaBars className="block lg:hidden text-3xl" />
    </header>
  );
}
