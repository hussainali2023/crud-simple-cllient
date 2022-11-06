import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you wand to sure to delete: ${user.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h1>Total Users: {displayUsers.length}</h1>
      <div>
        {displayUsers.map((user) => (
          <div>
            <li key={user._id}>
              {user.name} <button onClick={() => handleDelete(user)}>X</button>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
