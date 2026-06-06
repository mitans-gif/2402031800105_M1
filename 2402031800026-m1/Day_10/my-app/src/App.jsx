import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ 
          padding: "15px", 
          backgroundColor: "#1f2937", 
          borderBottom: "2px solid #4f46e5",
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}>
          <img 
            src="https://www.jotform.com/blog/wp-content/uploads/2017/01/react-js.png" 
            alt="React Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>
            Home
          </Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>
            About
          </Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>
            Contact
          </Link>
        </nav>

        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
