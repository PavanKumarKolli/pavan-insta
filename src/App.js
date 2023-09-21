import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  let UUU = localStorage.getItem("uuu");

  console.log(UUU);

  return (
    <div className="App">
      <Routers>
        <div className="mainnn">
          <Routes>
            <Route
              path="/"
              element={UUU ? <Navigate to="/home" /> : <Navigate to="/login" />}
            />
            <Route
              path="/home"
              element={UUU ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={UUU ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              path="/signup"
              element={UUU ? <Navigate to="/home" /> : <Signup />}
            />
          </Routes>
        </div>
      </Routers>
    </div>
  );
}

export default App;

