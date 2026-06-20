import "./Open.css";
import { Bot, ExternalLink } from "lucide-react";

export default function SchemeAIHelp() {
  return (
    <div className="ai-help-card">
      <div className="ai-help-header">
        <div className="ai-icon">
          <Bot size={18} />
        </div>

        <div>
          <h3>Ask HaqDar AI</h3>
          <span>ALWAYS AVAILABLE</span>
        </div>
      </div>

      <p>
        Not sure if you're eligible?
        Ask our AI assistant for a
        personalized check-up.
      </p>

      <button className="chat-btn">
        Start Chatting
        <ExternalLink size={16} />
      </button>
    </div>
  );
}