const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-8 px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-6xl font-extrabold text-amber-400 mb-4">
          About Me
        </h1>
        <div className="text-xl text-gray-600 leading-relaxed space-y-4">
          <p>
            I'm a passionate developer with expertise in modern web
            technologies.
          </p>
          <p>
            My journey in software development started with a curiosity for
            creating and has evolved into a professional pursuit of excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-amber-500 mb-2">Skills</h3>
            <p className="text-gray-600">
              React, Node.js, TypeScript, Tailwind
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-amber-500 mb-2">
              Experience
            </h3>
            <p className="text-gray-600">3 years of web development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
