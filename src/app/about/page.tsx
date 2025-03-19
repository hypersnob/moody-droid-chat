"use client";

import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <>
      <SectionHeader
        title="About"
        onClose={() => {
          router.back();
        }}
      />
      <div className="max-w-4xl mx-auto space-y-4 px-6 pt-14 pb-6 text-center">
        <h1 className="text-5xl font-black mb-6 text-base-500">
          About Moody Droid Chat
        </h1>
        <p className="text-xl text-base-600">
          Created by a frontend developer and designer who loves both code and
          robots with attitude.
        </p>
        <p className="text-xl text-base-600">
          <b>Disclaimer:</b> Moody Droid Chat is a fun, non-commercial, open
          source project. All character rights belong to their respective
          owners. This app is a fan-made tribute to iconic robot characters from
          science fiction. The project was built with love, humor, and a healthy
          appreciation for machines that don't always want to be helpful.
        </p>
        <p className="text-xl text-base-600">
          Want to contribute or suggest a new character? Check out the{" "}
          <a
            href="https://github.com/hypersnob/moody-droid-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-500 hover:text-base-600 transition-colors font-bold underline"
          >
            GitHub repository
          </a>
          !
        </p>
      </div>
    </>
  );
};

export default About;
