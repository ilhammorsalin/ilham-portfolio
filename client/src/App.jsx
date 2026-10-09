import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
