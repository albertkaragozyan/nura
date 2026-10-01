"use client";

import Anywhere from "./components/anywhere";
import Header from "./components/header";
import HearingProfile from "./components/hearingProfile";
import SomeProducts from "./components/someProducts";
import Sound from "./components/sound";
import NuraAd from "./components/nuraAd";
import Footer from "./components/footer";
import { useState } from "react";

export default function Home() {
  const [cartNumber, setCartNumber] = useState<number>(0);
  return (
    <>
      <div>
        <Header cartNumber={cartNumber} />
        <SomeProducts setCartNumber={setCartNumber} />
        <HearingProfile />
        <Anywhere />
        <Sound />
        <NuraAd />
        <Footer />
      </div>
    </>
  );
}
