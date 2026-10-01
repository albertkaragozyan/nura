"use client";

import Image from "next/image";
import Link from "next/link";
import nura from "../images/nura.png";
import { useCart } from "./CartContext";

function Header() {
    const { cartNumber } = useCart();
    return (
        <header className="absolute top-0 z-10 w-[100%] flex justify-center items-center">
            <div className="w-[1440px] flex justify-between items-center h-[80px] px-[30px]">
                <div className="flex gap-[44px] items-center">
                    <Link href="/">
                        <Image className="w-[100px] mt-[4px]" src={nura} alt="nura" />
                    </Link>
                    <nav>
                        <ul className="flex gap-[40px] text-white text-[24px] items-center">
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/">Subscription</Link>
                            </li>
                            <li>
                                <Link href="/">Why Nura?</Link>
                            </li>
                            <li>
                                <Link href="/">Support</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="text-white text-[23px] cursor-pointer">
                    Cart ({cartNumber})
                </div>
            </div>
        </header>
    );
}

export default Header;