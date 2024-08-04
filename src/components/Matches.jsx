
const Matches = ({setCurrentScreen}) => {

    // const imagePrefix = "http://localhost:9000/images/";

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
                imageUrl: "8.png",
                myersBriggsPersonalityType: "ESTJ",
              },
              {
                id: "10",
                firstName: "Chen",
                lastName: "Li",
                bio: "Financial Analyst with a knack for market trends. Enjoys chess and dislikes impulsive decisions.",
                imageUrl: "10.png",
                myersBriggsPersonalityType: "INTJ",
              },
            ].map((match) => (
              <li key={match.id} className="mb-2">
                <button className="w-full hover:bg-gray-100 rounded flex item-center"
                onClick={() => setCurrentScreen('chat')}>
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
}
export default Matches;