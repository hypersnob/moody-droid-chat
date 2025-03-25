import React, { ChangeEvent, useCallback, useMemo } from "react";
import { getPersonaData } from "@/lib/utils";
import { PersonaId } from "@/types";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  input: string;
  setInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  persona: PersonaId;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  handleSubmit,
  persona,
  disabled,
}) => {
  const isDisabled = useMemo(
    () => disabled || input.length === 0,
    [disabled, input.length]
  );

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      if (isDisabled) return;
      e.preventDefault();
      handleSubmit(e);
    },
    [handleSubmit, isDisabled]
  );

  return (
    <form
      onSubmit={submit}
      className="flex items-center gap-x-4 py-4 px-6 rounded-3xl bg-white shadow-xl"
    >
      <input
        className="flex-1 p-2 outline-none"
        value={input}
        onChange={setInput}
        placeholder={`Talk to ${getPersonaData(persona).name} ...`}
      />

      <button
        type="submit"
        className="flex items-center justify-center h-10 w-10 rounded-full bg-primary disabled:bg-base-200 disabled:cursor-not-allowed text-white shrink-0"
        disabled={isDisabled}
      >
        <ArrowUp size={24} />
      </button>
    </form>
  );
};

export default ChatInput;
