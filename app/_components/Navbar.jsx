"use client";

import Link from "next/link";
import { FaShoppingCart, FaBars, FaChevronDown } from "react-icons/fa";
import NavItems from "./NavItem";

export default function Navbar() {
  return (
    <nav className="rounded-sm hidden lg:flex justify-between lg:w-2/3 items-center ">
      <ul className="list-none flex flex-row gap-5 items-start lg:items-center">
        <li className="flex gap-3 items-center nav-item">
          <Link href="/products">Products</Link>
          <FaChevronDown />
        </li>
        <li className="flex gap-3 items-center nav-item">
          <Link href="/distributors">Distributors</Link>
          <FaChevronDown />
        </li>
      </ul>

      <div className="relative">
        <span className="absolute -top-0 text-lg -right-2 bg-white text-primary rounded-full w-5 h-5 text-center">
          0
        </span>
        <FaShoppingCart className="text-3xl text-green-300" />
      </div>

      <ul></ul>
      <ul className="list-none flex gap-3 ">
        <Link
          href="/auth/login"
          className="bordered-btn bg-green-700 border-white w-1/2">
          Login
        </Link>
        <Link href="/auth/signup" className="bordered-btn w-1/2">
          Signup
        </Link>
      </ul>
    </nav>
  );
}
