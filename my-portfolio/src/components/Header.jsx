import elamDP from "../assets/elamDP.png";

function Header() {
  return (
    <header className="bg-white shadow p-6 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-20 h-20 mr-3" src={elamDP} alt="elam dp" />
        <h1 className="text-2xl font-bold text-gray-800">Ilham's Portfolio</h1>
      </div>
      <nav className="space-x-6">
        <a href="#home" className="text-gray-600 hover:text-blue-500">
          Home
        </a>
        <a href="#about" className="text-gray-600 hover:text-blue-500">
          About
        </a>
        <a href="#projects" className="text-gray-600 hover:text-blue-500">
          Projects
        </a>
        <a href="#contact" className="text-gray-600 hover:text-blue-500">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
