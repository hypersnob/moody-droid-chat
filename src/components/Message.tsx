import React from "react";
import { UIMessage } from "ai";
import { PersonaId } from "@/types";
import clsx from "clsx";
import Avatar from "./Avatar";
interface MessageProps {
  message: UIMessage;
  persona: PersonaId;
  isStreaming?: boolean;
}

const Message: React.FC<MessageProps> = ({ message, persona, isStreaming }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={clsx("flex gap-x-2 flex-nowrap items-end", {
        "justify-end": isUser,
      })}
    >
      {!isUser && <Avatar persona={persona} size="sm" />}
      <div
        className={clsx(
          "whitespace-pre-wrap px-6 py-4 rounded-[1.5rem] text-base-600",
          isUser ? "bg-base-200 rounded-br-none" : "bg-white rounded-bl-none",
        )}
      >
        {isStreaming ? (
          <span className="flex gap-1">
            <span className="w-1 h-1 bg-base-300 rounded-full animate-[bounce_1s_infinite_0ms]" />
            <span className="w-1 h-1 bg-base-300 rounded-full animate-[bounce_1s_infinite_200ms]" />
            <span className="w-1 h-1 bg-base-300 rounded-full animate-[bounce_1s_infinite_400ms]" />
          </span>
        ) : (
          message.content
        )}
      </div>
    </div>
  );
};

export default Message;
