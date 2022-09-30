import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home"
import LogIn from "./components/logIn/LogIn";
import LogOut from "./components/logOut/LogOut";
import SignUp from "./components/signUp/SignUp";
import UserPage from "./components/userPage/UserPage.jsx";
import User from "./components/userPage/user/User.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logIn" element={<LogIn />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/logOut" element={<LogOut />} />
          <Route exact path="/userPage" element={<UserPage />} />
          <Route exact path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
