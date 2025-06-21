const ContactSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-8 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-6xl font-extrabold text-amber-400 text-center mb-8">
          Contact Me
        </h1>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-400 py-3 rounded-lg text-white font-semibold
              hover:bg-amber-500 active:bg-amber-600 transform hover:scale-105 
              transition-all duration-200 shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
