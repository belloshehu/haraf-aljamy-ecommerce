export default function Promotion({
  image,
  title,
  message,
  fromDate,
  toDate,
  value,
}) {
  return (
    <div className="min-h-screen p-5 lg:p-24 bg-gradient-to-tr from-green-500 via-cyan-300 to-black w-full text-white">
      <h1 className="text-white font-extrabold text-center md:text-center text-3xl lg:text-7xl my-5">
        Promo
      </h1>
    </div>
  );
}
