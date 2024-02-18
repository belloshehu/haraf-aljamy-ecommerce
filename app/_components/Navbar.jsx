"use client";

import Link from "next/link";
import { FaShoppingCart, FaBars, FaChevronDown } from "react-icons/fa";
import NavItems from "./NavItem";
import { useSession, signOut } from "next-auth/react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { data: session } = useSession();
  const { carts } = useSelector((store) => store.cart);
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

      <Link
        className="relative flex items-center justify-center gap-2"
        href={"/cart"}>
        <span className="flex items-center justify-center absolute -top-2 bg-opacity-75 -left-5 bg-black text-primary rounded-full w-8 h-8 text-center">
          <small>{carts.length}</small>
        </span>
        <FaShoppingCart className="text-3xl text-green-300" />
        Cart
      </Link>

      {session?.user ? (
        <ul className="list-none flex gap-3 items-center">
          <small>Hi, {session?.user?.firstName}</small>
          <button
            type="button"
            className="bg-green-700 border-white p-2 rounded-md"
            onClick={() => {
              signOut();
            }}>
            Logout
          </button>
        </ul>
      ) : (
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
      )}
    </nav>
  );
}
