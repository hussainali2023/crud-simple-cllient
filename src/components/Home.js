import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>Total Users: {users.length}</h1>
      <div>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Home;
