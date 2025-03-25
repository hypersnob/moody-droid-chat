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
          Hi, I'm Oleg, a creative web developer based in Berlin, Germany. This
          project is a playful exploration of my love for science fiction,
          quirky AI interactions, and frontend development.
        </p>
        <p className="text-xl text-base-600">
          <b>Currently Open to Work:</b> If you're looking for a creative and
          technical mind who can bring unique ideas to life, I'm always excited
          to hear about new opportunities! Check out my{" "}
          <a
            href="https://www.linkedin.com/in/hypersnob/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-500 hover:text-base-600 transition-colors font-bold underline"
          >
            LinkedIn profile
          </a>{" "}
          to learn more about my work and skills.
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
