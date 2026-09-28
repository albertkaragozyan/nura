import React from 'react';
import Image from 'next/image';
import HeadPhones from "../images/headPhones.png";
import discount25 from "../images/discount25.png"; 
import localFont from "next/font/local";
import Link from 'next/link';

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Regular.ttf",
});

const baiJamjuree = localFont({
  src: "../fonts/BaiJamjuree-Regular.ttf",
});

function SomeProducts() {
    return (
        <div className="flex flex-col gap-[57px] mb-[100px]">
            <div className="mt-[91px] flex items-baseline gap-[507px] justify-center">
                <div className={`${spaceGrotesk.className} text-white text-[65px]`}>Featured discounts</div>
                <div className={`${baiJamjuree.className} text-[#7DFB5D] text-[16px] cursor-pointer`}>WIEW ALL PRODUCTS <span className="text-[20px]">→</span></div>
            </div>
            <div className="flex gap-[20px] justify-center">
                <div className="realtive w-[313px] h-[495px] bg-[#E5E5E5] rounded-[20px]">
                    <Image className="absolute mt-[30px] ml-[25px]" src={discount25} alt="25% OFF" />
                    <Image src={HeadPhones} alt="Headphones"  />
                    <div className="flex flex-col justify-center items-center">
                        <div className={`${spaceGrotesk.className} text-[36px]`}>Nuraphone</div>
                        <div><span className="text-[16px] mt-[13px] text-[#ACACAC] line-through">$399</span> $299.25</div>
                        <Link href="/" className={`${baiJamjuree.className} cursor-pointer hover:bg-blue-400 transition duration-500 mt-[32px] rounded-[50px] text-[16px] py-[8px] px-[18px] bg-[#3333F5] w-fit text-white `}>SHOP NOW <span className="text-[20px]">→</span></Link>
                    </div>
                </div>
                <div className="realtive w-[313px] h-[495px] bg-[#E5E5E5] rounded-[20px]">
                    <Image className="absolute mt-[30px] ml-[25px]" src={discount25} alt="25% OFF" />
                    <Image src={HeadPhones} alt="Headphones"  />
                    <div className="flex flex-col justify-center items-center">
                        <div className={`${spaceGrotesk.className} text-[36px]`}>Nuraphone</div>
                        <div><span className="text-[16px] mt-[13px] text-[#ACACAC] line-through">$399</span> $299.25</div>
                        <Link href="/" className={`${baiJamjuree.className} cursor-pointer hover:bg-blue-400 transition duration-200 mt-[32px] rounded-[50px] text-[16px] py-[8px] px-[18px] bg-[#3333F5] w-fit text-white `}>SHOP NOW <span className="text-[20px]">→</span></Link>
                    </div>
                </div>
                <div className="realtive w-[313px] h-[495px] bg-[#E5E5E5] rounded-[20px]">
                    <Image className="absolute mt-[30px] ml-[25px]" src={discount25} alt="25% OFF" />
                    <Image src={HeadPhones} alt="Headphones"  />
                    <div className="flex flex-col justify-center items-center">
                        <div className={`${spaceGrotesk.className} text-[36px]`}>Nuraphone</div>
                        <div><span className="text-[16px] mt-[13px] text-[#ACACAC] line-through">$399</span> $299.25</div>
                        <Link href="/" className={`${baiJamjuree.className} cursor-pointer hover:bg-blue-400 transition duration-200 mt-[32px] rounded-[50px] text-[16px] py-[8px] px-[18px] bg-[#3333F5] w-fit text-white `}>SHOP NOW <span className="text-[20px]">→</span></Link>
                    </div>
                </div>
                <div className="realtive w-[313px] h-[495px] bg-[#E5E5E5] rounded-[20px]">
                    <Image className="absolute mt-[30px] ml-[25px]" src={discount25} alt="25% OFF" />
                    <Image src={HeadPhones} alt="Headphones"  />
                    <div className="flex flex-col justify-center items-center">
                        <div className={`${spaceGrotesk.className} text-[36px]`}>Nuraphone</div>
                        <div><span className="text-[16px] mt-[13px] text-[#ACACAC] line-through">$399</span> $299.25</div>
                        <Link href="/" className={`${baiJamjuree.className} cursor-pointer hover:bg-blue-400 transition duration-200 mt-[32px] rounded-[50px] text-[16px] py-[8px] px-[18px] bg-[#3333F5] w-fit text-white `}>SHOP NOW <span className="text-[20px]">→</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomeProducts;