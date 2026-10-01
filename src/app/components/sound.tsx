import React from 'react';
import Image from 'next/image';
import person from "../images/person.png";
import Link from 'next/link';
import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Regular.ttf",
});

function Sound() {
    return (
        <div>
            <div className="relative flex justify-center items-center">
                <Image className="w-[100%] h-[722px] object-cover" src={person} alt="Person" />
                <div data-aos="fade-up" className="absolute flex flex-col justify-center items-center w-[882px]">
                    <p className={`${spaceGrotesk.className} text-white text-[72px] leading-none`}>A sound subscription</p>
                    <p className={`${spaceGrotesk.className} text-center leading-none mt-[20px] text-white text-[33px]`}>Experience personalised sound across our devices on a low monthly fee with NuraNow. Cancel anytime.
                    </p>
                    <Link className="hover:bg-blue-500 transition duration-200 flex justify-center items-center mt-[81px] text-white w-fit leading-none py-[13px] px-[35px] rounded-[50px] bg-[#3333F5] text-[32px]" href="/">DISCOVER NURANOW <span className="text-[43px] ml-[19px]">→</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Sound;