import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import elamDP from "../assets/elamDP.png";

function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: FaHome, label: "Home" },
    { path: "/about", icon: FaUser, label: "About" },
    { path: "/projects", icon: FaCode, label: "Projects" },
    { path: "/contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-20 bg-gray-900 flex flex-col items-center py-4 space-y-4">
        <div className="w-12 h-12 mb-12 rounded-full bg-white flex items-center justify-center group hover:cursor-pointer">
          <img
            src={elamDP}
            alt="Profile"
            className="w-3/4 h-3/4 object-cover transition-transform duration-700 ease-in-out group-hover:rotate-360"
          />
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex items-center justify-center w-12 h-12 transition-all duration-200 ${
                isActive
                  ? "bg-green-500 rounded-2xl"
                  : "bg-gray-800 rounded-full hover:bg-green-500 hover:rounded-2xl"
              }`}>
              <Icon
                className={`w-6 h-6 transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }`}
              />

              {/* Tooltip */}
              <span className="absolute left-14 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 ml-20">
        <header className="bg-white shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Ilham's Portfolio
          </h1>
        </header>
      </div>
    </div>
  );
}

export default Header;
