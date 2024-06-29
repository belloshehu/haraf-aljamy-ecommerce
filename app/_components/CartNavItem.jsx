"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
const CartNavItem = () => {
  const { carts } = useSelector((store) => store.cart);
  return (
    <Link
      className="relative flex items-center justify-center gap-2"
      href={"/cart"}>
      <span className="flex items-center justify-center absolute -top-2 bg-opacity-75 -left-5 bg-black text-primary rounded-full w-8 h-8 text-center">
        <small>{carts.length}</small>
      </span>
      <FaShoppingBag className="text-3xl text-green-300" />
    </Link>
  );
};

export default CartNavItem;
