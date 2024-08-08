import { useState } from "react";
import { User, MessageCircle} from "lucide-react";
const Chats = ({ currentMatchAndChat, handleSend }) => {
  console.log(currentMatchAndChat);
  const [input, setInput] = useState("");
  const onHandleSend = () => {
    if (input.trim()) {
      setInput("");
    }
    handleSend(currentMatchAndChat.profile, currentMatchAndChat.chat.id, input);
  };
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">
        Chat with {currentMatchAndChat.profile.firstName}{" "}
        {currentMatchAndChat.profile.lastName}
      </h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-4 bg-gray-50">
        {currentMatchAndChat.chat.messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.authorId === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`flex items-end ${
                message.authorId === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {message.authorId === 'user' 
              ? (<User size={15}/>) : 
              (
                <img src={`http://localhost:9000/images/${currentMatchAndChat.profile.imageUrl}`} 
                className="w-11 h-11 rounded-full" />
              )}
              <div className={`max-w-xs px-4 py-2 rounded-2xl 
              ${message.authorId === 'user'
              ? 'bg-blue-500 text-white ml-2'
              : 'bg-gray-200 text-gray-800 mr-2'}
              `}
              >{message.messageText}</div>
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
          onClick={() => onHandleSend()}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Chats;
