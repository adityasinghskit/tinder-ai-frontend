import { useState } from "react";

const Chats = ({ currentMatchAndChat }) => {
  console.log(currentMatchAndChat);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      console.log("handle send");
      setInput("");
    }
  };
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Chats</h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-4">
        {currentMatchAndChat.chat.map((message, index) => (
          <div key={index}>
            <div className="mb-4 p-2 rounded bg-gray-100">
              {message.messageText}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="border flex-1 rounded p-2 mr-2"
        />
        <button
          className="bg-blue-500 text-white rounded p-2"
          onClick={() => handleSend()}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Chats;
