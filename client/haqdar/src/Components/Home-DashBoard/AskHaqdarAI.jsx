import { Headset, ExternalLink } from "lucide-react";
import "./HomeDashBoard.css";

export default function AskHaqdarAI({ onOpen }) {
  return (
    <div className="ask-ai-card">
      <div className="ask-ai-icon">
        <Headset size={38} />
      </div>

      <h3>Ask HaqDar AI</h3>

      <p>
        Get instant guidance about schemes, eligibility,
        required documents, and application processes.
      </p>

      <button
        className="chat-btn"
        onClick={onOpen}
      >
        Start Chatting
        <ExternalLink size={18} />
      </button>
    </div>
  );
}