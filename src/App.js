import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  let userStorage = localStorage.getItem("user");

  console.log(userStorage);

  return (
    <div className="App">
      <Routers>
        <div className="mainnn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Routers>
    </div>
  );
}

export default App;
