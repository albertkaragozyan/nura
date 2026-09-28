import Anywhere from "./components/anywhere";
import Header from "./components/header";
import HearingProfile from "./components/hearingProfile";
import SomeProducts from "./components/someProducts";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <SomeProducts />
        <HearingProfile />
        <Anywhere />
      </div>
    </>
  );
}
