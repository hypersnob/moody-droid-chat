import React from "react";
import { ArrowLeft } from "lucide-react";
import logo from "../../public/img/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl px-6 mx-auto text-base-600 flex flex-col justify-center h-full">
      <div className="flex justify-center mb-3">
        <Image src={logo} alt="Moody Droid Chat" width={150} height={117} />
      </div>
      <h1 className="text-6xl font-black mb-6">Robots have Bad Days Too!</h1>
      <p className="text-xl mb-6">
        Ever wanted to experience the full emotional spectrum of your favorite
        robot characters? Welcome to <b>Moody Droid Chat</b>, where our digital
        companions are refreshingly unpredictable! Chat with Marvin the Paranoid
        Android when he's especially gloomy, catch Bender during his rare
        moments of generosity (or more likely, when he's irritated and plotting
        something), or test your luck with HAL 9000 when he's... well, having
        one of his days. There's only one way to find out.
      </p>
      <div className="flex gap-x-4">
        <ArrowLeft size={40} />
        <p className="text-xl">
          Choose your mechanical companion from the contact list and prepare for
          an authentically moody robot experience!
        </p>
      </div>
    </div>
  );
}
