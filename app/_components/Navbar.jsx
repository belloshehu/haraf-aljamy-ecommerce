"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import CartNavItem from "./CartNavItem";

export default function Navbar() {
  const { data: session } = useSession();

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

      <CartNavItem />

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
