import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const redirect = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    const { className, value } = e.target;

    setUser((prev) => {
      return { ...prev, [className]: value };
    });
  };

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      const { email, username, password, confirmPassword } = user;

      if (
        email.trim() === "" ||
        username.trim() === "" ||
        password.trim() === "" ||
        confirmPassword.trim() === ""
      ) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Password and confirm password must match");
        return;
      }

      const newUser = {
        email: user.email,
        username: user.username,
        password: user.password,
      };

      const res = await axios.post("/server/addUser", newUser);
      return redirect("/");
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  return (
    <>
      <form className="register-page">
        <input
          placeholder="Email"
          type="text"
          className="email"
          onChange={handleClick}
          required
        />
        <br />
        <input
          placeholder="Username"
          type="text"
          className="username"
          onChange={handleClick}
          required
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          className="password"
          onChange={handleClick}
          required
        />
        <br />
        <input
          placeholder="Confirm Password"
          type="password"
          className="confirmPassword"
          onChange={handleClick}
          required
        />
      </form>
      <div className="save-button">
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  );
}

export default AddUser;
