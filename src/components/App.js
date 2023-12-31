
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
