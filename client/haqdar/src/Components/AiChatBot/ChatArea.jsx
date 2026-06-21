import ChatMessage from "./ChatMessage";

export default function ChatArea({ messages }) {
  return (
    <div className="chat-area">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
    </div>
  );
}