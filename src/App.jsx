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


const App = () => {
const [currentScreen, setCurrentScreen] = useState("profile");
const [currentProfile, setCurrentProfile] = useState(null);

  const loadRandomProfile = async () => {
    try {
      const profile = await fetchRandomProfile();
      setCurrentProfile(profile);
    } catch (error){
      console.error(error);
    }
  }

  const onSwipe = (direction) => {
    if(direction == 'right'){
      console.log("liked");
    }
    loadRandomProfile();
  }

  useEffect(() => {
      loadRandomProfile();
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case "profile":
        return <Profile profile={currentProfile} onSwipe={onSwipe}/>;
      case "matches":
        return <Matches setCurrentScreen={setCurrentScreen}/>;
      case "chat":
        return <Chats />;
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
