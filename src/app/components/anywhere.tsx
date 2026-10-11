import React from 'react';
import Image from 'next/image';
import parrot from "../images/parrot.png";

function Anywhere() {
    return (
        <div>
            <div className="relative flex justify-center items-center">
                <Image src={parrot} alt="" />
                <div data-aos="fade-up" className="absolute">
                    <div className="text-white md:pl-[709px]">
                        <p className="flex flex-col pl-[15px] text-[70px] md:text-[93px] leading-none"><span>Play from</span>
                            <span>any device.</span></p>
                        <p className="px-[20px] w-full max-w-[450px] md:w-[607px] text-[25px] md:text-[33px] mt-[24px]">Your hearing profile is <span className="text-[#7DFB5D]">stored on the earbuds</span>, and is applied to whatever you listen to, <span className="text-[#7DFB5D]">on any device</span>.
                        </p>
                        <p className="mt-[10px] md:mt-[20px] w-full px-[20px] max-w-[450px] md:w-[606px] text-[25px] md:text-[33px]">Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anywhere;