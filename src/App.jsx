import { useEffect, useState } from "react";
import "./App.css";
import { User, MessageCircle} from "lucide-react";
import Matches from "./components/Matches";
import Profile from "./components/Profile";
import Chats from "./components/Chats";

const fetchRandomProfile = async () => {
  const response = await fetch('http://localhost:9000/profiles/random');
  if(!response.ok){
    throw new Error('Failed to fetch profile');
  }
  return response.json();
}

const saveSwipe = async (profileId) => {
  const response = await fetch('http://localhost:9000/matches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({profileId})
  });
  if(!response.ok){
    throw new Error('Failed to save swipe');
  }
}

const getMatches = async () => {
  const response = await fetch('http://localhost:9000/matches');
  if(!response.ok){
    throw new Error('Failed to get matches');
  }
  return response.json();
}

const getConversation = async (conversationId) => {
  const response = await fetch('http://localhost:9000/conversations/'+conversationId);
  if(!response.ok){
    throw new Error('Failed to fetch conversation for conversationId: '+conversationId);
  }
  return response.json();
}

const App = () => {
const [currentScreen, setCurrentScreen] = useState("profile");
const [currentProfile, setCurrentProfile] = useState(null);
const [matches, setMatches] = useState([]);
const [currentMatchAndChat, setCurrentMatchAndChat] = useState({profile:{}, chat:[]});

  const loadRandomProfile = async () => {
    try {
      const profile = await fetchRandomProfile();
      setCurrentProfile(profile);
    } catch (error){
      console.error(error);
    }
  }

  const loadMatches = async () => {
    try {
      const matches = await getMatches();
      setMatches(matches);
    } catch (error) {
      console.error(error);
    }
  }

  const onSwipe = async (direction, profileId) => {
    loadRandomProfile();
    if(direction == 'right'){
      await saveSwipe(profileId);
      await loadMatches();
    }
  }

  const openConversation = async(profile, conversationId) => {
      const conversations = await getConversation(conversationId);
      console.log("conversations: " + JSON.stringify(conversations));
      setCurrentMatchAndChat({profile: profile, chat: conversations.messages});
      setCurrentScreen("chat");
  }

  useEffect(() => {
      loadRandomProfile();
      loadMatches();
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case "profile":
        return <Profile profile={currentProfile} onSwipe={onSwipe}/>;
      case "matches":
        return <Matches openConversation={openConversation} matches={matches}/>;
      case "chat":
        return <Chats currentMatchAndChat={currentMatchAndChat}/>;
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
