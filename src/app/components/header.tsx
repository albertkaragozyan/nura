"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderImage from "../images/HeaderImage.png";
import nura from "../images/nura.png";
import localFont from "next/font/local";

const baiJamjuree = localFont({
    src: "../fonts/BaiJamjuree-Regular.ttf",
});

function Header({ cartNumber }: {
    cartNumber: number
}) {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-[100%]">
                <Image className="w-[100%] h-[900px] object-cover" src={HeaderImage} alt="Header image" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-0 w-[100%] flex gap-[740px] h-[80px] justify-center items-center">
                    <div className="mx-[14px] flex gap-[44px] items-center">
                        <Image className="h-fit w-[100px] self-center pt-[4px]" src={nura} alt="nura" />
                        <nav>
                            <ul className="flex gap-[40px] text-white text-[24px] items-center">
                                <li><Link href="/">Products</Link></li>
                                <li><Link href="/">Subscription</Link></li>
                                <li><Link href="/">Why Nura?</Link></li>
                                <li><Link href="/">Support</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="text-white text-[23px] cursor-pointer">Cart <span>({cartNumber})</span></div>
                </div>
                <div data-aos="fade-up" className="absolute left-0 w-full top-[421px] text-white text-center h-[300px]">
                    <p className="font-normal text-[34px] leading-none">OUR BIGGEST SALE NOW LIVE</p>
                    <h1 className={`${baiJamjuree.className} mb-[21px] text-[96px]`}>Black Friday Starts Now!</h1>
                    <Link href="/" className="hover:bg-gray-500 transition duration-200 px-[24px] py-[13px] text-black bg-white rounded-[50px]">SHOP SALE NOW <span className="text-[20px]">→</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;