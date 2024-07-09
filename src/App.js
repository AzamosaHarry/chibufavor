import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Ds from "./pages/ds/Ds";
import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/driving-school" element={<Ds />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
