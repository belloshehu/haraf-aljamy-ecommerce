import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Image from "next/image";
import Slider from "./Slider";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 justify-around lg:justify-center items-center p-5 lg:p-24 lg:py-10 bg-gradient-radial from-cyan-600 bg-opacity-50">
      <Image
        src={"/images/bread1.jpg"}
        alt="bread"
        width={200}
        height={300}
        className="absolute top-0 -z-10 left-0 h-full w-full object-fill"
      />
      <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
        <h1 className="text-white font-extrabold text-3xl lg:text-7xl">
          Freshly baked <span className="text-cyan-900">for healthy</span>{" "}
          living
        </h1>
        <p className="text-slate-100">
          Fresh bread, cakes for various occations
        </p>
        <Link
          href="order"
          className="p-4 bg-gradient-to-r from-green-800 to-cyan-500 shadow-lg text-white font-semibold px-7 max-w-fit">
          Place an order
        </Link>
      </div>
      <div className="min-h-fit w-full lg:w-3/5">
        <Slider />
      </div>
    </section>
  );
}
