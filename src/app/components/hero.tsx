"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderImage from "../images/HeaderImage.png";
import localFont from "next/font/local";

const baiJamjuree = localFont({
  src: "../fonts/BaiJamjuree-Regular.ttf",
});

export default function Hero() {
  return (
    <main>
      <div className="relative w-full">

        <Image
          className="w-full h-[900px] object-cover"
          src={HeaderImage}
          alt="Header image"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div
          data-aos="fade-up"
          className="absolute left-0 w-full top-[421px] text-white text-center h-[300px]"
        >
          <p className="font-normal text-[34px] leading-none">
            OUR BIGGEST SALE NOW LIVE
          </p>

          <h1
            className={`${baiJamjuree.className} mb-[21px] text-[96px]`}
          >
            Black Friday Starts Now!
          </h1>

          <Link
            href="/products"
            className="hover:bg-gray-500 transition duration-200 px-[24px] py-[13px] text-black bg-white rounded-[50px]"
          >
            SHOP SALE NOW →
          </Link>
        </div>

      </div>
    </main>
  );
}