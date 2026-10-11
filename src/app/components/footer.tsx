import React from 'react';
import Image from 'next/image';
import nura from "../images/nura.png";
import localFont from "next/font/local";

const spaceGrotesk = localFont({
    src: "../fonts/SpaceGrotesk-Regular.ttf",
});

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#000000]">
            <div className="flex flex-wrap justify-center mt-[40px] sm:mt-[90px] gap-[18px]">
                <div className="flex flex-col gap-[10px] sm:gap-[30px] sm:w-[355px]">
                    <Image className="sm:w-[160px]" src={nura} alt="nura" />
                    <p className={` ${spaceGrotesk.className} text-[#FFFFFF] text-[16px] sm:text-[24px] w-[160px] sm:w-[311px]`}>Nura designs headphones tuned to you. Bringing you closer to music with personalised sound.</p>
                </div>
                <div className="sm:w-[200px]">
                    <p className={`${spaceGrotesk.className} text-[#737373] text-[16px]`}>SHOP</p>
                    <div className="flex flex-col gap-[9px] text-[#EBEBEB]">
                        <p>NuraTrue Pro</p>
                        <p>Audio Transmitter</p>
                        <p>NuraTrue</p>
                        <p>NuraBuds</p>
                        <p>Nuraphone</p>
                        <p>NuraLoop</p>
                        <p>Accessories</p>
                        <p>Subscription</p>
                    </div>
                </div>
                <div className="sm:w-[200px]">
                    <p className={`${spaceGrotesk.className} text-[#737373] text-[16px]`}>INFO</p>
                    <div className="flex flex-col gap-[9px] text-[#EBEBEB]">
                        <p>Why Nura?</p>
                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>Warranty</p>
                        <p>Patets</p>
                    </div>
                </div>
                <div className="sm:w-[200px]">
                    <p className={`${spaceGrotesk.className} text-[#737373] text-[16px]`}>SUPPORT</p>
                    <div className="flex flex-col gap-[9px] text-[#EBEBEB]">
                        <p>Help Centre</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="sm:w-[200px]">
                    <p className={`${spaceGrotesk.className} text-[#737373] text-[16px]`}>SOCIALS</p>
                    <div className="flex flex-col gap-[9px] text-[#EBEBEB]">
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>YouTube</p>
                        <p>Tidal</p>
                        <p>Twitter</p>
                        <p>Discord</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-[10px] sm:w-full justify-between px-[20px] mt-[10px] sm:mt-[50px] mb-[30px] max-w-[1312px]">
                <p className="text-[13px] text-[#737373]">Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.</p>
                <div className="flex flex-wrap gap-[10px] text-[13px] text-[#737373]">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Legal</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;