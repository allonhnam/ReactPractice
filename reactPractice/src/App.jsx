import "./App.css";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorite />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
