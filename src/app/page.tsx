import React from "react";
import { ArrowLeft } from "lucide-react";
import logo from "../../public/img/robo_free.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl p-6 mx-auto flex flex-col justify-center items-center text-center h-full">
      <div className="flex justify-center mb-6">
        <Image src={logo} alt="Moody Droid Chat" width={200} height={224} />
      </div>
      <h1 className="md:text-5xl text-3xl font-black mb-4 md:mb-6 text-base-500">
        Robots have Bad Days Too!
      </h1>
      <p className="text-xl text-base-600 mb-4 md:mb-6">
        Ever wanted to experience the full emotional spectrum of your favorite
        robot characters? Welcome to Moody Droid Chat, where our digital
        companions are refreshingly unpredictable!
      </p>
      <p className="text-xl text-base-600 mb-4 md:mb-6">
        Chat with Marvin the Paranoid Android when he's especially gloomy, catch
        Bender during his rare moments of generosity (or more likely, when he's
        irritated and plotting something), or test your luck with HAL 9000 when
        he's... well, having one of his days. There's only one way to find out.
      </p>
      <p className="text-xl text-base-600 mb-4 md:mb-6">
        Choose your mechanical companion from the contact list and prepare for
        an authentically moody robot experience!
      </p>
      <div className="justify-center items-center bg-base-50 rounded-full p-3 text-base-200 hidden md:flex">
        <ArrowLeft size={40} />
      </div>
    </div>
  );
}
