import "../Components/AiChatBot/AiSideBar.css";
import AiHeader from "../Components/AiChatBot/AiHeader";
import ChatArea from "../Components/AiChatBot/ChatArea";
import QuickActions from "../Components/AiChatBot/QuickActions";
import MessageInput from "../Components/AiChatBot/MessageInput";
import { useState } from "react";
import { askAI } from "../Services/ai.Service.js";
export default function AiSidebar({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello Mohd! I'm your HaqDar AI Assistant. Ask me anything about government schemes.",
      time: "Now",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = {role: "user",content: text};
    console.log(userMessage);
    

    
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await askAI({ message: text, history: messages });

      console.log(response.response);
      
      const botMessage = {
        role: "assistant",
        content: response.response.answer,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ai-sidebar">
      <AiHeader onClose={onClose} />

      <ChatArea messages={messages} loading={loading} />

      <QuickActions onSelect={handleSend} />

      <MessageInput onSend={handleSend} />
    </div>
  );
}
