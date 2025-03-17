import React from "react";
import { X } from "lucide-react";
import { PersonaId } from "@/types";
import { getPersonaData } from "@/lib/utils";
import Avatar from "./Avatar";

type SectionHeaderProps = {
  onClose: () => void;
} & (
  | {
      title: string;
      persona?: never;
    }
  | {
      title?: never;
      persona: PersonaId;
    }
);

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  persona,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between h-22 px-6 bg-white border-b border-base-100">
      {persona ? (
        <div className="flex gap-2">
          <Avatar persona={persona} />
          <div className="flex flex-col">
            <p className="text-base text-base-500 font-bold">
              {getPersonaData(persona).name}
            </p>
            <p className="text-xs text-base-400">@{persona}</p>
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-semibold text-base-500">{title}</h2>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="text-base-300 hover:text-base-500 hover:cursor-pointer"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
