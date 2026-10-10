"use client";

import Image from "next/image";
import Link from "next/link";
import nura from "../images/nura.png";
import { useCart } from "./CartContext";
import Cart from "./cart";

function Header() {
    const { cartNumber } = useCart();
    return (
        <header className="absolute top-0 z-10 w-[100%] flex justify-center items-center">
            <div className="w-[1440px] flex justify-between items-center h-[80px] px-[30px]">
                <div className="flex gap-[20px] sm:gap-[44px] items-center">
                    <Link href="/">
                        <Image className="w-[70px] sm:w-[100px] mt-[1px] sm:mt-[4px]" src={nura} alt="nura" />
                    </Link>
                    <nav>
                        <ul className="flex gap-[20px] sm:gap-[40px] text-white text-[16px] sm:text-[24px] items-center">
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/subscription">Subscription</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Cart />
            </div>
        </header>
    );
}

export default Header;