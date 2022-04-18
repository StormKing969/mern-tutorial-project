import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:5000/createUser").then((response) => {
      alert("User Created");
    });
  };

  return (
    <div className="App">
      <div className="userDisplaty">
        {userList.map((user) => {
          return (
            <>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </>
          );
        })}
      </div>

      <div>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Age" />
        <input type="text" placeholder="Username" />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
