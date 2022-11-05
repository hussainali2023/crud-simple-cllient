import React from "react";

const Update = () => {
  const handleUpdateUser = (event) => {
    event.preventDefault();
    // console.log(user);
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
  };

  return (
    <div>
      <h2>Pl</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id=""
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
