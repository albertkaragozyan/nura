"use client";

import React from 'react';
import Image from 'next/image';
import HeadPhones from "../images/headPhones.png";
import discount25 from "../images/discount25.png";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "../components/CartContext";

const spaceGrotesk = localFont({
    src: "../fonts/SpaceGrotesk-Regular.ttf",
});

const baiJamjuree = localFont({
    src: "../fonts/BaiJamjuree-Regular.ttf",
});

function SomeProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const { addToCart } = useCart();
    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then((res) => res.json())
            .then((res) => setProducts(res))
    }, [])

    const randomProducts = [...products].sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <div className="flex flex-col gap-[57px] mb-[100px]">
            <div className="mt-[91px] flex items-baseline gap-[507px] justify-center">
                <div className={`${spaceGrotesk.className} text-white text-[65px]`}>Featured discounts</div>
                <div className={`${baiJamjuree.className} text-[#7DFB5D] text-[16px] cursor-pointer`}>WIEW ALL PRODUCTS <span className="text-[20px]">→</span></div>
            </div>
            <div className="flex gap-[20px] justify-center">
                {randomProducts.map((product) => {
                    return (
                        <div key={product.id} data-aos="fade-right" className="relative overflow-hidden w-[313px] h-fit pb-[30px] bg-[#E5E5E5] rounded-[20px]">
                            <Image className="absolute mt-[30px] ml-[25px]" src={discount25} alt="25% OFF" width={94} height={94} />
                            <Image className="object-cover h-[300px]" src={product.image} alt="Headphones" width={313} height={300} />
                            <div className="flex flex-col justify-center items-center">
                                <div className={`${spaceGrotesk.className} text-[36px] leading-none text-center mt-[20px]`}>{product.name}</div>
                                <div>${product.price}</div>
                                <button onClick={addToCart} className={`${baiJamjuree.className} cursor-pointer hover:bg-blue-500 transition duration-500 mt-[32px] rounded-[50px] text-[16px] py-[8px] px-[18px] bg-[#3333F5] w-fit text-white `}>ADD TO CART <span className="text-[20px]">→</span></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SomeProducts;