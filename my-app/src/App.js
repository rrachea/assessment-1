import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./screens/About";
import Home from "./screens/Home";
import Navigation from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
