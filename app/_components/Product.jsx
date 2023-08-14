import Image from "next/image";
import Link from "next/link";

export default function Product({ id, name, image, price, status, discount }) {
  return (
    <article className="relative flex group flex-col gap-2 w-full shadow-xl max-h-[500px] bg-slate-100 hover:shadow-lg hover:scale-105 duration-200 transition-all">
      <Image
        src={image}
        width={300}
        height={200}
        alt={name}
        className="shadow-lg rounded-t-md w-full h-[90%]"
      />
      {/* displays status of product whether it is available or not */}
      <div
        className={`absolute top-2 right-2 min-w-fit px-2 rounded-md bg-opacity-50 ${
          status === "available" ? "bg-green-500" : "bg-red-400"
        }`}>
        <small>{status}</small>
      </div>

      {/* discount badge */}
      {discount && (
        <div
          className={`absolute top-2 left-2 min-w-fit p-2 w-10 h-10 rounded-full flex items-center justify-center bg-opacity-50 bg-green-400`}>
          <small>-{discount}%</small>
        </div>
      )}

      <div className="flex justify-between items-center mb-4 px-5">
        <h4 className="text-primary">{name}</h4>
        <h4 className="text-slate-500">#{price}</h4>
      </div>
      <Link
        href={`order/${id}`}
        className="invisible group-hover:visible w-full p-2 px-7 text-center bg-gradient-to-r from-green-400 to-cyan-500 font-semibold text-white shadow-md">
        Order now
      </Link>
    </article>
  );
}
