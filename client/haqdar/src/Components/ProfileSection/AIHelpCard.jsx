import { MessageSquare } from "lucide-react";

export default function AIHelpCard() {
  return (
    <div className="hd-profile-ai-card">
      <h3>Need Help?</h3>

      <h2>HaqDar AI</h2>

      <p>
        Chat with our expert AI to find schemes tailored
        specifically for your profile.
      </p>

      <button>
        <MessageSquare size={18} />
        Start Chatting
      </button>
    </div>
  );
}