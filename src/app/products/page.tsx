"use client";

import Link from "next/link";
import Image from "next/image";
import discount25 from "../images/discount25.png";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { useSearchParams } from "next/navigation";
import { useCart } from "../components/CartContext";

const baiJamjuree = localFont({
    src: "../fonts/BaiJamjuree-Regular.ttf",
});

const spaceGrotesk = localFont({
    src: "../fonts/SpaceGrotesk-Regular.ttf",
});

export default function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then((res) => res.json())
            .then((res) => setProducts(res))
    }, [])
    
    const filteredProducts = products.filter(
        (e: any) => e.name.toLowerCase().includes(query?.toLowerCase() || "")
    )
    const { addToCart } = useCart();
    
    return (
        <div className="my-[100px] flex flex-col justify-center items-center">
            <h1 className={`${baiJamjuree.className} text-center font-bold text-[50px] text-white`}>Products</h1>

            <form className="flex gap-[10px] mt-[5px] mb-[20px]">
                <input className="border-2 border-white rounded-[20px] text-white w-[300px] h-[35px] placeholder:text-gray-400 px-[10px]" type="text" name="query" defaultValue={query} placeholder="Search..." />
                <button className="border-2 border-white rounded-[20px] w-[70px] text-[white] h-[35px]" type="submit">Search</button>
            </form>

            <div className="w-[1440px] flex flex-wrap justify-center items-center gap-[15px]">
                {filteredProducts.map((e: any) => {
                    return (
                        <div key={e.id} data-aos="fade-right" className="relative overflow-hidden w-[313px] h-fit pb-[30px] bg-[#E5E5E5] rounded-[20px]">
                            <Image className="absolute mt-[30px] ml-[25px]" src={discount25} alt="25% OFF" width={94} height={94} />
                            <Image className="object-cover h-[300px]" src={e.image} alt="Headphones" width={313} height={300} />
                            <div className="flex flex-col justify-center items-center">
                                <div className={`${spaceGrotesk.className} text-[36px] leading-none text-center mt-[20px]`}>{e.name}</div>
                                <div>${e.price}</div>
                                <button onClick={addToCart} className={`${baiJamjuree.className} cursor-pointer hover:bg-blue-500 transition duration-500 mt-[32px] rounded-[50px] text-[16px] py-[8px] px-[18px] bg-[#3333F5] w-fit text-white `}>SHOP NOW <span className="text-[20px]">→</span></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
