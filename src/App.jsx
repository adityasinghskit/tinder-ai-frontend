import "./App.css";
import { User, MessageCircle, X, Heart } from "lucide-react";


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

const App = () => {
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <nav className="flex justify-between mb-4">
          <User />
          <MessageCircle />
        </nav>
        <ProfileSelector />
      </div>
    </>
  );
};

export default App;
