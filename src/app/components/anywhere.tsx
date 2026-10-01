import React from 'react';
import Image from 'next/image';
import parrot from "../images/parrot.png";

function Anywhere() {
    return (
        <div>
            <div className="relative flex justify-center items-center">
                <Image src={parrot} alt="" />
                <div data-aos="fade-left" className="absolute">
                    <div className="text-white pl-[709px]">
                        <p className="flex flex-col text-[93px] leading-none"><span>Play from</span>
                            <span>any device.</span></p>
                        <p className="w-[607px] text-[33px] mt-[24px]">Your hearing profile is <span className="text-[#7DFB5D]">stored on the earbuds</span>, and is applied to whatever you listen to, <span className="text-[#7DFB5D]">on any device</span>.
                        </p>
                        <p className="mt-[20px] w-[606px] text-[33px]">Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anywhere;