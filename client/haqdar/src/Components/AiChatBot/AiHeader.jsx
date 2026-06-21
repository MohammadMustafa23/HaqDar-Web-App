import { Bot, X } from "lucide-react";

export default function AiHeader({ onClose }) {
  return (
    <div className="ai-header">
      <div className="header-left">
        <div className="bot-icon">
          <Bot size={22} />
        </div>

        <div>
          <h3>HaqDar AI</h3>
          <p>Online</p>
        </div>
      </div>

      <button onClick={onClose}>
        <X size={20} />
      </button>
    </div>
  );
}