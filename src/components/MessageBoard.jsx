import React, { useState } from "react";

export default function MessageBoard() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello everyone!" },
    { id: 2, text: "Excited for today’s lesson." }
  ]);
  const [input, setInput] = useState("");

  const addMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  return (
    <div className="message-board">
      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a message..."
      />
      <button onClick={addMessage}>Send</button>
    </div>
  );
}
