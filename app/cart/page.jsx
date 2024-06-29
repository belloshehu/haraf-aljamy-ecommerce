"use client";

import { useDispatch, useSelector } from "react-redux";
import CartItem from "../_components/CartItem";
import PageWrapper from "../_components/PageWrapper";
import CartNavItem from "../_components/CartNavItem";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect } from "react";
import {
  calculateTotalAmount,
  getCartItems,
} from "../GlobalRedux/features/cart/cartSlice";

export default function Cart() {
  const { carts, totalAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [carts]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (carts.length === 0)
    return (
      <PageWrapper>
        <section className="flex justify-center items-center min-h-[50vh]">
          <h1 className="text-xl font-semibold text-cyan-500">
            Your shopping car is empty
          </h1>
        </section>
      </PageWrapper>
    );
  return (
    <PageWrapper>
      <section className=" m-5 md:m-10">
        <div className="flex w-fit mb-10 items-center text-xl text-white my-5 bg-cyan-500 p-2 gap-2">
          <FaShoppingBag className="text-2xl  shadow-md" />
          My shopping cart ({carts.length})
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {carts.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
        </div>
        <footer className="my-10 border-t-2 border-cyan-500 flex justify-between items-center py-10">
          <h1 className="text-xl font-semibold">Total</h1>
          <h1 className="text-xl font-semibold">N{totalAmount}</h1>
        </footer>
      </section>
    </PageWrapper>
  );
}
