
const Matches = ({matches, openConversation}) => {

    const imagePrefix = "http://localhost:9000/images/";
    console.log(matches);

    return (
        <div className="rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Matches</h2>
          <ul>
            {matches.length > 0 && matches.map((match) => (
              <li key={match.profile.id} className="mb-2">
                <button className="w-full hover:bg-gray-100 rounded flex item-center"
                onClick={() => openConversation(match.profile, match.conversationId)}>
                  <img
                    src={imagePrefix + match.profile.imageUrl}
                    alt="profile image"
                    className="w-20 h-20 rounded-full"
                  />
                  <span className="pl-4 font-bold">
                    <h3>
                      {match.profile.firstName} {match.profile.lastName}
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