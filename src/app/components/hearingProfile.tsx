import React from 'react';
import Image from 'next/image';
import phone from "../images/phone.png";
import phoneScreen from "../images/phoneScreen.png";
import localFont from "next/font/local";
import Link from 'next/link';

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Regular.ttf",
});

function HearingProfile() {
  return (
    <div className="flex justify-center overflow-x-clip h-[1200px] sm:h-[580px] xl:h-[984px] bg-[linear-gradient(138deg,_rgba(51,51,245,1)_17%,_rgba(51,129,245,1)_64%,_rgba(51,129,245,1)_100%)]">
      <div className="flex flex-wrap justify-center gap-[20px] sm:gap-[0px]">
        <div className="relative  pt-[15px]">
          <Image className="absolute left-1/2 top-[15px] -translate-x-1/2 sm:w-[400px] w-[400px] xl:w-[600px] max-w-none h-auto z-10" src={phoneScreen} alt="Phone-screen"/>
          <Image className="relative w-[400px] sm:w-[400px] xl:w-[600px] z-[100] h-auto" src={phone} alt="Phone"/>
        </div>
        <div data-aos="fade-up" className="sm:mt-[100px] xl:mt-[187px]">
          <div>
            <p className={`${spaceGrotesk.className} text-[33px] xl:text-[93px] text-white flex flex-col leading-none`}><span>For your</span><span>ears only.</span></p>
          </div>
          <p className={`${spaceGrotesk.className} mt-[25px] w-full max-w-[300px] xl:max-w-none xl:w-[618px] text-white text-[20px] xl:text-[33px]`}>Normal hearing varies significantly from person to person, and these variations make a <span className="text-[#7DFB5D]">big difference</span> to how you experience music.</p>
          <p className="text-white mt-[20px] text-[20px] xl:text-[33px] w-full max-w-[300px] xl:max-w-none md:w-[585px]">The first time you use Nura earbuds, they <span className="text-[#7DF85D]">measure your hearing</span> to create your personalised hearing profile.</p>
          <Link href="/" className="cursor-pointer hover:bg-white hover:text-blue-500 transition duration-200 mt-[23px] border-2 w-fit rounded-[40px] py-[5px] px-[13px] xl:py-[9px] xl:px-[23px] text-white text-[16px] xl:text-[20px] flex items-center gap-[12px]">LEARN MORE <span className="text-[20px] xl:text-[25px]">→</span></Link>
        </div>
      </div>
    </div>
  )
}

export default HearingProfile;