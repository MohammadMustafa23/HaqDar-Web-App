import "../Components/AiChatBot/AiSideBar.css";
import AiHeader from "../Components/AiChatBot/AiHeader";
import ChatArea from "../Components/AiChatBot/ChatArea";
import QuickActions from "../Components/AiChatBot/QuickActions";
import MessageInput from "../Components/AiChatBot/MessageInput";
import { useState } from "react";

export default function AiSidebar({ isOpen , onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello Mohd! I'm your HaqDar AI Assistant. Ask me anything about government schemes.",
      time: "Now",
    },
  ]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
      time: "Now",
    };

    setMessages((prev) => [...prev, userMessage]);

    // AI API CALL HERE

    const botReply = {
      id: Date.now() + 1,
      sender: "bot",
      text: "AI response will come here.",
      time: "Now",
    };

    setMessages((prev) => [...prev, botReply]);
  };

  if (!isOpen) return null;

  return (
    <div className="ai-sidebar">
      <AiHeader onClose={onClose} />

      <ChatArea messages={messages} />

      <QuickActions onSelect={handleSend} />

      <MessageInput onSend={handleSend} />
    </div>
  );
}