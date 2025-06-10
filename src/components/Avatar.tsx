import { PersonaId } from "@/types";
import clsx from "clsx";
import benderImg from "../../public/img/bender.svg";
import halImg from "../../public/img/hal9000.svg";
import marvinImg from "../../public/img/marvin.svg";
import Image from "next/image";

const imgSrc: Record<PersonaId, string> = {
  bender: benderImg,
  hal9000: halImg,
  marvin: marvinImg,
};

interface AvatarProps {
  persona: PersonaId;
  size?: "sm" | "lg";
}

const Avatar = ({ persona, size = "lg" }: AvatarProps) => (
  <div
    className={clsx(
      "rounded-full bg-base-300 text-white flex items-center justify-center shrink-0 overflow-hidden",
      {
        "w-10 h-10": size === "sm",
        "w-12 h-12": size === "lg",
      },
    )}
  >
    <Image src={imgSrc[persona]} alt={persona} sizes="100%" />
  </div>
);
export default Avatar;
