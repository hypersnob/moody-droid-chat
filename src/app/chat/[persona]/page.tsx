"use client";

import React, { useEffect, useRef } from "react";
import { useChat, UseChatOptions } from "@ai-sdk/react";
import Message from "@/components/Message";
import { PersonaId } from "@/types";
import { notFound } from "next/navigation";
import { getPersonaData, PERSONAS } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import ChatInput from "@/components/ChatInput";
import { toast } from "sonner";

export default function Chat() {
  const params = useParams();
  const router = useRouter();
  const persona = params.persona as PersonaId;

  const scrollRef = useRef<HTMLDivElement>(null);

  const isPersona = (value: string): value is PersonaId =>
    PERSONAS.includes(value as PersonaId);

  if (!isPersona(persona)) {
    notFound();
  }

  const chatOptions: UseChatOptions = {
    api: "/api/chat",
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: getPersonaData(persona).initialMessage,
      },
    ],
    body: {
      persona,
    },
    onError: (err) => {
      toast.error(err.message);
    },
  };

  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat(chatOptions);

  useEffect(() => {
    if (scrollRef.current && (status === "ready" || status === "streaming")) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [status]);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] relative overflow-hidden">
      <SectionHeader
        persona={persona}
        onClose={() => {
          router.push("/");
        }}
      />
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6">
        <div className="w-full max-w-2xl mx-auto bg-base-100 pt-6 pb-32">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="text-xs text-base-400 bg-base-200 px-4 py-2 rounded-full leading-none">
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                })}
              </div>
            </div>
            {messages.map((m, index) => (
              <Message
                key={m.id}
                message={m}
                persona={persona}
                isStreaming={
                  status === "streaming" && index === messages.length - 1
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-8 px-6">
        <div className="w-full max-w-2xl mx-auto">
          <ChatInput
            input={input}
            setInput={handleInputChange}
            handleSubmit={handleSubmit}
            persona={persona}
            disabled={status === "streaming"}
          />
        </div>
      </div>
    </div>
  );
}
