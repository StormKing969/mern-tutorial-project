import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [userList, setUserList] = useState([]);
  const [userInput, setUserInput] = useState({
    name: "",
    age: 0,
    username: ""
  })

  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:5000/createUser", {
      name: userInput.name,
      age: userInput.age,
      username: userInput.username,
    }).then((response) => {
      alert("User Created")
    });
  };

  function getUserInfo(event) {
    const {name, value} = event.target

    setUserInput(previous => {
      return {
        ...previous,
        [name]: value
      }
    })
  }

  console.log(userInput.name);

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
        <input type="text" name="name" placeholder="Name" onChange={getUserInfo} />
        <input type="number" name="age" placeholder="Age" onChange={getUserInfo} />
        <input type="text" name="username" placeholder="Username" onChange={getUserInfo} />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
