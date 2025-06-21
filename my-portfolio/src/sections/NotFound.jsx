import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-9xl font-extrabold text-amber-400">404</h1>
        <h2 className="text-4xl font-bold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link to={"/"}>
        <button
          className="group bg-amber-400 px-8 py-4 rounded-full text-white font-semibold shadow-lg
          hover:bg-amber-500 active:bg-amber-600 transform hover:scale-105 transition-all duration-200">
          <span className="flex items-center gap-2">
            Return Home
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
