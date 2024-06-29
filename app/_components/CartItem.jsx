"use client";
import Link from "next/link";
import { getPriceWithoutDiscount } from "../utils/product";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { removeFromCart } from "../GlobalRedux/features/cart/cartSlice";

const CartItem = ({ id, name, price, stock, discount, image }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(id));
    toast.success(`Removed ${name} from cart`);
  };

  return (
    <div className="w-full border-[1px] border-cyan-200 flex gap-y-5 flex-col items-center justify-center md:flex-row md:justify-start md:gap-x-8">
      <img
        src={image}
        alt={name}
        className="w-full md:w-2/5 aspect-auto"
        height={200}
        width={300}
      />
      <div className="w-full flex flex-col gap-2 p-5">
        <Link href={`/product/${id}`}>
          <h1 className="text-xl md:text-3xl font-semibold">{name}</h1>
        </Link>
        <div className="flex items-center justify-start gap-5 p-0">
          <p className="text-xl">N{price}</p>
          <p className="text-xl text-slate-400 line-through">
            N{getPriceWithoutDiscount(price, discount)}
          </p>
          <h3 className=" bg-cyan-100 p-1 rounded-md text-cyan-500">
            {discount}% off
          </h3>
        </div>
        <p>{stock} in stock</p>
        <div className="flex flex-col gap-5 md:flex-row w-full">
          <Link
            href="order"
            className="p-4 bg-gradient-to-r from-green-800 text-center mt-5 to-cyan-500 shadow-lg text-white font-semibold px-7 w-full">
            Checkout
          </Link>
          <button
            className="p-4 bg-gradient-to-r border-2 border-cyan-500 text-center mt-5 shadow-lg text-cyan-500 font-semibold px-7 w-full"
            onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
