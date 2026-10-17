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
                <div data-aos="fade-up" className="absolute flex flex-col justify-center items-center px-20px w-full max-w-[882px]">
                    <p className={`${spaceGrotesk.className} text-white text-center text-[50px] lg:text-[72px] leading-none`}>A sound subscription</p>
                    <p className={`${spaceGrotesk.className} w-full lg:w-fit text-center leading-none sm:px-[20px] mt-[20px] text-white text-[20px] lg:text-[33px]`}>Experience personalised sound across our devices on a low monthly fee with NuraNow. Cancel anytime.
                    </p>
                    <Link className="hover:bg-blue-500 transition duration-200 flex justify-center items-center mt-[30px] lg:mt-[81px] text-white w-fit leading-none py-[8px] px-[17px] lg:py-[13px] lg:px-[35px] rounded-[50px] bg-[#3333F5] text-[20px] lg:text-[32px]" href="/subscription">DISCOVER NURANOW <span className="text-[25px] lg:text-[43px] ml-[10px] lg:ml-[19px]">→</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Sound;