"use client";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { products } from "../../data";
import Link from "next/link";
import { ProductQuantityField } from "../../_components/ProductQuantityField";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../GlobalRedux/features/product/productSlice";
import { addToCart } from "../../GlobalRedux/features/cart/cartSlice";

const getProduct = async (id) => {
  return products.filter((product) => product.id === id)[0];
};

async function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((store) => store.product);

  useEffect(() => {
    (async function () {
      const productItem = await getProduct(params.id);
      setProduct(productItem);
      dispatch(setSelectedProduct(productItem));
    })();
  }, []);

  const getPriceWithoutDiscount = () => {
    return product?.price + (product?.price * product?.discount) / 100;
  };
  return (
    <section className="w-full p-5 md:p-20">
      <div className="w-full flex flex-col md:flex-row gap-8">
        <section className="w-full md:w-1/2">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-[400px] aspect-square object-cover"
          />
          {/* thumbnail container */}
          <div className="flex justify-start items-center gap-4 my-3">
            <img
              src={product?.image}
              alt={product?.name}
              className="aspect-auto object-cover"
              width={100}
              height={20}
            />
            <img
              src={product?.image}
              alt={product?.name}
              className="aspect-auto object-cover"
              width={100}
              height={20}
            />
            <img
              src={product?.image}
              alt={product?.name}
              className="aspect-auto object-cover"
              width={100}
              height={20}
            />
          </div>
        </section>

        {/* details section */}
        <section className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl font-semibold">{product?.name}</h1>
          <div className="flex items-center justify-start gap-5 p-0">
            <p className="text-xl">N{product?.price}</p>
            <p className="text-xl text-slate-400 line-through">
              N{getPriceWithoutDiscount()}
            </p>
            <h3 className=" bg-cyan-100 p-1 rounded-md text-cyan-500">
              {product?.discount}% off
            </h3>
          </div>
          <p>{product?.stock} in stock</p>
          <ProductQuantityField />
          <div>
            <p>Total cost: N{product?.price * selectedProduct?.quantity}</p>
          </div>
          <div className="flex justify-start gap-4 items-center my-5 md:my-10">
            <Link
              href="order"
              className="p-4 bg-gradient-to-r from-green-800 to-cyan-500 shadow-lg text-white font-semibold px-7 max-w-fit">
              Place order
            </Link>
            <button
              className="p-4 bg-gradient-to-r from-green-800 to-cyan-500 shadow-lg text-white font-semibold px-7 max-w-fit"
              onClick={() => {
                dispatch(addToCart(selectedProduct));
              }}>
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default memo(ProductDetailPage);
