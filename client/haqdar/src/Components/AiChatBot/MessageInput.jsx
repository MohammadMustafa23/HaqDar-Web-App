import { SendHorizontal } from "lucide-react";
import "./AiSidebar.css";
import { useState } from "react";

export default function MessageInput({
  onSend,
}) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <div className="message-input">
      <input
        value={message}
        placeholder="Ask about schemes..."
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={(e) =>
          e.key === "Enter" && sendMessage()
        }
      />

      <button className="send-btn"  onClick={sendMessage}>
        <SendHorizontal size={20} strokeWidth={2}/>
      </button>
    </div>
  );
}