import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Produkty from "./components/Produkty";
import Koszyk from "./components/Koszyk";
import Platnosci from "./components/Platnosci";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/produkty">Produkty</Link>
            </li>
            <li>
              <Link to="/koszyk">Koszyk</Link>
            </li>
            <li>
              <Link to="/platnosci">Płatności</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/produkty" element={<Produkty />} />
          <Route path="/koszyk" element={<Koszyk />} />
          <Route path="/platnosci" element={<Platnosci />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
