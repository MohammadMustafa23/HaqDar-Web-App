import { Headset, ExternalLink } from "lucide-react";
import './HomeDashBoard.css'

export default function AskHaqdarAI() {
  return (
    <div className="ask-ai-card">
      <div className="ask-ai-icon">
        <Headset size={38} />
      </div>

      <h3>Ask HaqDar AI</h3>

      <p>
        Speak with our experts for step-by-step
        assistance with your application.
      </p>

      <button className="chat-btn">
        Start Chatting
        <ExternalLink size={18} />
      </button>
    </div>
  );
}