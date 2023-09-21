import React, { useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [errorData, setErrorData] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const usernameChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const API = axios.create({ baseURL: "http://localhost:5000" });
    API.post("/login", user)
      .then((res) => {
        // setTeamUserList(res.data);

        if (res.status === 200) {
          localStorage.setItem("uuu", JSON.stringify(res.data));
          navigate("/");
        }

        // console.log(res);
      })

      .catch((e) => {
        setErrorData(e.response.data);
      });
  };

  // console.log(user);

  return (
    <div className="l-m-p">
      <div className="login-mainpage-container">
        <div className="login-sideimg-container">
          <img style={{ width: "100px" }} src="./instagram-logo-name.png" />
          <img
            style={{ width: "250px" }}
            src="./108-1083668_get-started-today-to-grow-your-instagram-organically-removebg-preview.png"
          />
        </div>
        <div>
          <div className="login-container">
            <form onSubmit={submitForm} className="login-form-controller">
              <h2>Instagram</h2>
              <input
                type="text"
                name="email"
                placeholder="Phone number, username, or email"
                required
                onChange={usernameChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={usernameChange}
              />
              {errorData && <span>{errorData}</span>}
              <button type="submit">Login</button>
              <div className="hr">
                <hr />
                <span>or</span>
                <hr />
              </div>
              <div>
                <ImFacebook2 />
                <span className="login-with-facebook">Login with Facebook</span>
              </div>
              <span>Forgot password</span>
            </form>

            <div className="get-app-container">
              <div className="login-donthaveaccount">
                <span>Don't have an account? Sign Up</span>
                <span>Get the app</span>
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
        </div>
      </div>
      <div className="footer-main-div">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Location</span>
        <span>Instagram Lite</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-Users</span>
        <span>Meta Verified</span>
        <select
          style={{
            border: "none",
            outlineStyle: "none",
            fontstyle: "italic",
            fontfamily: "monospace",
          }}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
        </select>
      </div>
    </div>
  );
};

export default Login;
