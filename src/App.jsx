import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Title from "./components/title/Title";
import Home from "./components/home/Home"
import User from "./components/userPage/user/User.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Title />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<User />} />
        </Routes>
        <Title />
      </div>
    </BrowserRouter>
  );
}

export default App;
