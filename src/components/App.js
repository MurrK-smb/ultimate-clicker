import "./App.css";
import Navbar from "./Navbar/Navbar.js";
import Game from "./Game/Game.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Game />
    </div>
  );
}

export default App;
