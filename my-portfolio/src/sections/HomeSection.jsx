import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-8 px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-6xl font-extrabold text-amber-400 mb-4">
          Hello, I'm Ilham
        </h1>
        <h2 className="text-3xl font-bold text-gray-700">
          Full Stack Developer
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Welcome to my portfolio! I craft elegant solutions through code,
          turning ideas into interactive experiences.
        </p>
        <Link to="/projects">
          <div className="flex gap-4 justify-center mt-8">
            <button
              className="group bg-amber-400 px-6 py-3 rounded-full text-white font-semibold shadow-lg
            hover:bg-amber-500 active:bg-amber-600 transform hover:scale-105 transition-all duration-200">
              <span className="flex items-center gap-2">View Projects</span>
            </button>
          </div>
        </Link>

        <Link to="/contact">
          <button
            className="group px-6 py-3 rounded-full text-amber-500 font-semibold border-2 border-amber-400
            hover:bg-amber-400 hover:text-white active:bg-amber-500 transform hover:scale-105 transition-all duration-200">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSection;
