"use client";

import Anywhere from "./components/anywhere";
import Header from "./components/header";
import HearingProfile from "./components/hearingProfile";
import SomeProducts from "./components/someProducts";
import Sound from "./components/sound";
import NuraAd from "./components/nuraAd";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <SomeProducts />
        <HearingProfile />
        <Anywhere />
        <Sound />
        <NuraAd />
        <Footer />
      </div>
    </>
  );
}
