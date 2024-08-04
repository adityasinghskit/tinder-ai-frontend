import {X, Heart } from "lucide-react";
const Profile = ({profile, onSwipe}) => {
    return ( profile ? (
        <div className="rounded-lg overflow-hidden bg-white shadow-lg pb-4">
          <div className="relative">
            <img src={profile.imageUrl} alt="" />
            <div className="absolute bottom-0 left-0 right-0 text-white p-4">
              <h2 className="text-3xl font-bold">{profile.firstName} {profile.lastName}, {profile.age}</h2>
            </div>
          </div>
          <div className="p-4 pb-6 mb-4">
            <p className="text-gray-600">
             {profile.bio}
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 rounded-full text-white p-2 hover:bg-red-700"
            onClick={() => onSwipe("left")}>
              <X size={24} />
            </button>
            <button className="bg-green-500 rounded-full text-white p-2 hover:bg-green-700"
            onClick={() => onSwipe("right")}>
              <Heart size={24} />
            </button>
          </div>
        </div>
    ) : (<div>Loading...</div>)
      );
}
export default Profile;