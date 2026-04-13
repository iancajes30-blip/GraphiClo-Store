import ProductFeature from "../components/ProductFeature";
import Banner from "../components/Banner";
import { products } from "../data/products";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Marquee from "../components/Marquee";
import Banner from "../assets/Banner1.png";

export default function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="py-4">
      <Marquee />
      <Banner />
      <div className=" mb-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-4 max-h-[450px]">
        {/* Shop Men's Image Link */}
        <div className="relative w-full h-[64vh] max-h-[430px]">
          {/* BACKGROUND IMAGE */}
          <img
            src={shirt}
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* TEXT CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-10 md:px-20 text-white max-w-xl">
              <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition tracking-wide">
                SHOP MEN'S
              </button>
            </div>
          </div>
        </div>

        {/* Shop Women's Image Link */}
        <div className="relative w-full h-[64vh] max-h-[430px]">
          {/* BACKGROUND IMAGE */}
          <img
            src="src\assets\Banner1.png "
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* TEXT CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-10 md:px-20 text-white max-w-xl">
              <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition tracking-wide">
                SHOP WOMEN'S
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-primary font-raleway tracking-wide">
        MOST LOVED
      </h1>

      <div className="relative">
        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 z-10"
        >
          ←
        </button>

        {/* PRODUCTS */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {products.map((product) => (
            <div className="min-w-[380px]">
              <ProductFeature key={product.id} product={product} />
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 z-10"
        >
          →
        </button>
      </div>
    </div>
  );
}
