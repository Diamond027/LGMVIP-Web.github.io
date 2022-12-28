import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function App() {
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);

  const getUsersFromAPI = () => {
    axios.get("https://reqres.in/api/users?page=1/").then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    isClicked && getUsersFromAPI();
  }, [isClicked]);

  //this function sets the clicked state to 1 to call the api
  const getDataFromAPI = () => {
    setIsClicked(1);
  };

  return (
    <div className="App">
      {/*header component */}
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <h2 className="navbar-brand">LETSGROWMORE TASK-2</h2>
            <button onClick={getDataFromAPI} className="btn btn-info">
              Get Users
            </button>
          </div>
        </nav>
      </header>

      {/*Card display for users*/}
      <div className="row p-5 m-4 mt-5">
        {data &&
          data.map((userData) => {
            return (
              <UserCard
                first_name={userData.first_name}
                last_name={userData.last_name}
                email={userData.email}
                avatar={userData.avatar}
              />
            );
          })}
      </div>

      {/*footer component */}
      <div>
        <footer className="footer">
          <span className="text-muted">Saurabh Prakash</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
