import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-8 px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1
          className="text-6xl text-amber-400 font-extrabold mb-4 bg-clip-text bg-gradient-to-r bg-red-500 to-blue-500
        hover:bg-gradient-to-r hover:bg-red-500 hover:via-purple-500
        hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-500
        drop-shadow-2xl drop-shadow-white
        hover:scale-105 hover:-translate-y-1 active:skew-10">
          Hello, I'm Ilham
        </h1>

        <h2 className="text-3xl font-bold text-gray-700">
          Front End Developer
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Welcome to my portfolio. <br /> Dont be shy, take a tour. And make
          sure to click everything.{" "}
        </p>
        <div className="flex justify-center gap-x-2">
          <Link to="/projects">
            <button
              className="bg-amber-400 p-3 rounded-full text-white font-semibold shadow-lg
            hover:bg-amber-500 active:bg-amber-600 transform hover:scale-105 transition-all duration-200">
              <span className="">View Projects</span>
            </button>
          </Link>

          <Link to="/contact">
            <button
              className="border-2 p-3 rounded-full text-amber-400 font-semibold shadow-lg
            hover:bg-amber-500 active:bg-amber-600 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-200">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
