"use client";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import { Righteous } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  const path = usePathname();

  if (path.includes("login") || path.includes("signup")) {
    return;
  }
  return (
    <header className="bg-gradient-to-tr from-green-800 to-cyan-500 flex flex-row items-center w-full justify-between text-white  px-3 py-2 lg:py-5 lg:px-16">
      <div className="brand">
        <Link href={"/"}>
          <h1
            className={`${righteous.className} font-bold text-xl lg:text-3xl shadow-lg`}>
            Haraf Aljamay
          </h1>
        </Link>
      </div>
      <Navbar />
      <FaShoppingCart className="text-3xl text-green-500 place-self-end block lg:hidden" />
      <FaBars className="block lg:hidden text-3xl" />
    </header>
  );
}
