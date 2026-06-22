import { Bot } from "lucide-react";
import './AiSidebar.css'
export default function TypingIndicator() {
  return (
    <div className="message-row bot-row">
      <div className="avatar">
        <Bot size={16} />
      </div>

      <div className="message-bubble bot-bubble">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}