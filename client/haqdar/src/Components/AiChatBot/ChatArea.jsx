import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

export default function ChatArea({
  messages,
  loading,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="chat-area">
      {messages
        .filter((msg) => msg?.content)
        .map((msg, index) => (
          <ChatMessage
            key={index}
            message={{
              sender:
                msg.role === "assistant"
                  ? "bot"
                  : "user",
              text: msg.content,
            }}
          />
        ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}