import { Bot } from "lucide-react";

export default function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={`message-row ${
        isBot ? "bot-row" : "user-row"
      }`}
    >
      {isBot && (
        <div className="avatar">
          <Bot size={16} />
        </div>
      )}

      <div
        className={`message-bubble ${
          isBot ? "bot-bubble" : "user-bubble"
        }`}
      >
        <div className="message-content">
          {message?.text || ""}
        </div>
      </div>
    </div>
  );
}