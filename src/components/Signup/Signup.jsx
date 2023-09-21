import React, { useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import "./Signup.css";
import { Link } from "react-router-dom";

import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    fullname: "",
  });

  const changedAllUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  const submitAllForm = (e) => {
    e.preventDefault();
    const API = axios.create({ baseURL: "http://localhost:5000" });
    API.post("/signup", user)
      .then((res) => {
        // setTeamUserList(res.data);

        console.log(res);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="signup-main-div">
      <div className="signup-container">
        <form className="signup-form">
          <h2>Instagram</h2>
          <span>Sign up to see photos and videos from your friends.</span>
          <div className="login-with-facebook">
            <ImFacebook2 />
            <span>Login with Facebook</span>
          </div>
          <hr />
          <span>or</span>
          <hr />
          <input
            onChange={changedAllUser}
            type="text"
            placeholder="Mobile Number or Email"
            name="email"
          />
          <input
            onChange={changedAllUser}
            type="text"
            placeholder="Full Name"
            name="fullname"
          />
          <input
            onChange={changedAllUser}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            onChange={changedAllUser}
            type="password"
            placeholder="Password"
            name="password"
          />
          <span>
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </span>
          <span>
            By signing up, you agree to our Terms, Privacy Policy, and Cookies
            Policy.
          </span>
          <button onClick={submitAllForm}>Signup</button>
          <span>Have an account? Log In</span>
        </form>
      </div>
      <div className="get-app-container">
        <div>
          <span>Get the App</span>
        </div>
        <img
          src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
          alt="App Store"
        />
        <img
          src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
          alt="Google Play"
        />
      </div>
    </div>
  );
};

export default Signup;
