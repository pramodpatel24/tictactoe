import "./App.css";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import { useState } from "react";
import JoinGame from "./components/JoinGame";
import Entry from "./components/Entry";

function App() {
  const api_key = "wrs4gcfu95ex";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
      });
  }
  return (
    <div className="App">
      {isAuth ? (<>
        <JoinGame />
        <button onClick={logOut}> Log Out</button>
      </>
      ) : (
        <Entry setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;
