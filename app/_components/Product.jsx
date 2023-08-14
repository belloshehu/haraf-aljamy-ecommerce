import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Product({ id, name, image, price, status, discount }) {
  return (
    <article className="relative flex group flex-col gap-2 w-full shadow-xl max-h-[500px] bg-slate-100 hover:shadow-lg hover:scale-105 duration-200 transition-all">
      <Image
        src={image}
        width={300}
        height={200}
        alt={name}
        className="shadow-lg rounded-t-md w-full h-[100%]"
      />
      {/* displays status of product whether it is available or not */}
      <div
        className={`absolute top-2 right-2 min-w-fit px-2 rounded-md bg-opacity-50 ${
          status === "available" ? "bg-green-200" : "bg-red-200"
        }`}>
        <small>{status}</small>
      </div>

      {/* discount badge */}
      {discount && (
        <div
          className={`absolute top-2 left-2 min-w-fit p-2 w-10 h-10 rounded-full flex items-center justify-center bg-opacity-50 bg-green-200`}>
          <small>-{discount}%</small>
        </div>
      )}

      <div className="absolute bottom-0 z-20 flex flex-col w-full">
        <div className="flex justify-between items-center gap-2 mb-1  absolute w-full bottom-0 group-hover:bottom-10">
          <div className="flex items-center gap-2 bg-black  bg-opacity-80 p-1">
            <h4 className="text-primary">{name}</h4>
            <h4 className="text-slate-100">#{price}</h4>
          </div>
          <div className="flex items-center px-2">
            <small className="">add to cart</small>
            <FaShoppingCart className="text-black text-2xl" />
          </div>
        </div>

        <Link
          href={`order/${id}`}
          className="scale-0 group-hover:scale-[100%] w-full p-2 px-7 text-center bg-gradient-to-r from-green-400 to-cyan-500 font-semibold text-white shadow-md duration-150 transition-transform">
          Order now
        </Link>
      </div>
    </article>
  );
}
