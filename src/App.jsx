import { useState } from "react";
import "./App.css";
import { User, MessageCircle, X, Heart } from "lucide-react";

const App = () => {
const [currentScreen, setCurrentScreen] = useState("profile");
const [input, setInput] = useState('');
const imagePrefix = "http://localhost:9000/images/";

const ProfileSelector = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg pb-4">
      <div className="relative">
        <img src="http://localhost:9000/images/8.png" alt="" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-4">
          <h2 className="text-3xl font-bold">Foo Bar, 30</h2>
        </div>
      </div>
      <div className="p-4 pb-6 mb-4">
        <p className="text-gray-600">
          Civil Engineer dedicated to sustainable construction. Enjoys gardening
          and dislikes pollution.
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="bg-red-500 rounded-full text-white p-2 hover:bg-red-700">
          <X size={24} />
        </button>
        <button className="bg-green-500 rounded-full text-white p-2 hover:bg-green-700">
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};

const MatchesList = () => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Matches</h2>
      <ul>
        {[
          {
            id: "8",
            firstName: "Mia",
            lastName: "Martinez",
            bio: "Civil Engineer dedicated to sustainable construction. Enjoys gardening and dislikes pollution.",
            imageUrl: imagePrefix + "8.png",
            myersBriggsPersonalityType: "ESTJ",
          },
          {
            id: "10",
            firstName: "Chen",
            lastName: "Li",
            bio: "Financial Analyst with a knack for market trends. Enjoys chess and dislikes impulsive decisions.",
            imageUrl: imagePrefix + "10.png",
            myersBriggsPersonalityType: "INTJ",
          },
        ].map((match) => (
          <li key={match.id} className="mb-2">
            <button className="w-full hover:bg-gray-100 rounded flex item-center ">
              <img
                src={match.imageUrl}
                alt="profile image"
                className="w-20 h-20 rounded-full"
              />
              <span className="pl-4 font-bold">
                <h3>
                  {match.firstName} {match.lastName}
                </h3>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatScreen = () => {
  
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Chats</h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-4">
        {["Hi", "How are you?", "I am gooooddd."].map((message, index) => (
          <div key={index}>
            <div className="mb-4 p-2 rounded bg-gray-100">{message}</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input 
        type="text" 
        value={input} 
        onChange={(event) => setInput(event.target.value)}
        className="border flex-1 rounded p-2 mr-2"/>
        <button 
        className="bg-blue-500 text-white rounded p-2"
        onClick={() => handleSend()}>Send</button>
      </div>
    </div>
  );
};

const handleSend = () => {
  if(input.trim()){
    console.log("handle send");
  }
}
  
  const renderScreen = () => {
    switch (currentScreen) {
      case "profile":
        return <ProfileSelector />;
      case "matches":
        return <MatchesList />;
      case "chat":
        return <ChatScreen/>;
    }
  };


  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <nav className="flex justify-between mb-4">
          <User onClick={() => setCurrentScreen("profile")} />
          <MessageCircle onClick={() => setCurrentScreen("matches")} />
        </nav>
        {renderScreen()}
      </div>
    </>
  );
};

export default App;
