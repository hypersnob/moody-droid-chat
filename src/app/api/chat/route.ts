import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getSystemPrompt } from "@/lib/utils";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, persona } = await req.json();

  const systemMessage = getSystemPrompt(persona);

  const result = streamText({
    system: systemMessage,
    model: openai("gpt-4o-mini"),
    messages,
  });

  return result.toDataStreamResponse();
}
