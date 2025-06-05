import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-mono">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Main />} />
          <Route path="/projects" element={<Main />} />
          <Route path="/contact" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;