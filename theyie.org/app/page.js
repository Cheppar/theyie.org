import Image from "next/image";
import Intro from "./_components/Intro";
import AboutSec from "./_components/AboutSec";

export default function Home() {
  return (
    <div>
      <Intro />
      <AboutSec />
    </div>
  );
}
