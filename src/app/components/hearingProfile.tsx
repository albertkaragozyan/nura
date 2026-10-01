import React from 'react';
import Image from 'next/image';
import phone from "../images/phone.png";
import phoneScreen from "../images/phoneScreen.png";
import localFont from "next/font/local";
import Link from 'next/link';

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Regular.ttf",
});

const baiJamjuree = localFont({
  src: "../fonts/BaiJamjuree-Regular.ttf",
});

function HearingProfile() {
  return (
    <div className="flex justify-center h-[984px] bg-[linear-gradient(138deg,_rgba(51,51,245,1)_17%,_rgba(51,129,245,1)_64%,_rgba(51,129,245,1)_100%)]">
      <div className="flex">
        <div className="w-fit pt-[15px] flex justify-center">
          <Image className="absolute object-cover z-10" src={phoneScreen} alt="Phone-screen" />
          <Image className="relative z-[100] h-[1104px] object-cover" src={phone} alt="Phone" />
        </div>
        <div data-aos="fade-left" className="mt-[187px]">
          <div>
            <p className={`${spaceGrotesk.className} text-[93px] text-white flex flex-col leading-none`}><span>For your</span><span>ears only.</span></p>
            <p className={`${spaceGrotesk.className} text-[93px] text-white`}></p>
          </div>
          <p className={`${spaceGrotesk.className} mt-[25px] w-[618px] text-white text-[33px]`}>Normal hearing varies significantly from person to person, and these variations make a <span className="text-[#7DFB5D]">big difference</span> to how you experience music.
          </p>
          <p className="text-white mt-[20px] text-[33px] w-[585px]">
            The first time you use Nura earbuds, they <span className="text-[#7DF85D]">measure your hearing</span> to create your personalised hearing profile.
          </p>
          <Link href="/" className="cursor-pointer hover:bg-white hover:text-blue-500 transition duration-200 mt-[23px] border-2 w-fit rounded-[40px] py-[9px] px-[23px] text-white text-[20px] flex items-center gap-[12px]">LEARN MORE <span className="text-[25px]">→</span></Link>
        </div>
      </div>
    </div>
  )
}

export default HearingProfile;