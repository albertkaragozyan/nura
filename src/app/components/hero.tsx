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
        <Image className="w-full h-[700px] sm:h-[900px] object-cover" src={HeaderImage} alt="Header image" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div data-aos="fade-up" className="absolute left-0 w-full top-[221px] text-white text-center h-[300px]">
          <p className="font-normal text-[25px] sm:text-[34px] leading-none">OUR BIGGEST SALE NOW LIVE</p>
          <h1 className={`${baiJamjuree.className} leading-none mb-[21px] text-[50px] sm:text-[96px]`}>Black Friday Starts Now!</h1>
          <div className="sm:pt-[20px]">
            <Link href="/products" className="hover:bg-gray-500 transition duration-200 px-[16px] sm:px-[24px] py-[8px] sm:py-[13px] text-black bg-white rounded-[50px]">SHOP SALE NOW →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}