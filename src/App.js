import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Group from "./pages/group/group";
import Swipe from "./pages/swipe/swipe";
import Upload from "./pages/upload/upload";
import Input from "./components/input/input.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/register"} element={<Register />} />
          <Route exact path={"/group"} element={<Group />} />
          <Route exact path={"/swipe"} element={<Swipe />} />
          <Route exact path={"/upload"} element={<Upload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
