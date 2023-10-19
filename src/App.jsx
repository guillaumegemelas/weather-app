import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Accueil from "./pages/Accueil";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <p>Appli météo</p> */}
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/weather" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
