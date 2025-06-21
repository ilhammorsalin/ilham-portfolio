import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full fixed top-0 z-50">
      <header className="bg-gradient-to-r from-amber-50 to-amber-100 shadow-md p-6">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex gap-4">
            <Link to="/">
              <button className="text-amber-500 font-semibold hover:text-amber-600 transition-colors duration-200">
                Home
              </button>
            </Link>
            <Link to="/projects">
              <button className="text-amber-500 font-semibold hover:text-amber-600 transition-colors duration-200">
                Projects
              </button>
            </Link>
            <Link to="/about">
              <button className="text-amber-500 font-semibold hover:text-amber-600 transition-colors duration-200">
                About
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-amber-500 font-semibold hover:text-amber-600 transition-colors duration-200">
                Contact
              </button>
            </Link>
          </nav>
          <h1 className="text-3xl font-bold text-amber-400 hover:text-amber-500 transition-colors duration-200">
            Ilham's Portfolio
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
