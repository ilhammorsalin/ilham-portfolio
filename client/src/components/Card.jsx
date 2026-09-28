export function Card({ image, header, text, btnText }) {
  return (
    <div
      className="m-5 border-8 border-amber-50 first:border-amber-500 last:border-blue-300 p-4 gap-x-2 
      bg-white rounded-xl shadow-lg shadow-black 
      flex-shrink-0 flex items-center h-auto w-auto">
      <img
        className="border-4 border-purple-500 bg-yellow-300 rounded-full w-20 h-20"
        src={image}
        alt=""
      />
      <div className="">
        <div className="pl-2 -mb-1 text-xl font-medium text-black">
          {header}
        </div>
        <p className="pl-2 text-gray-500">{text}</p>
        <button
          className="px-3 pb-1 mx-2 mt-1 text-sm text-purple-600 
          font-semibold rounded-full border border-purple-200 
        hover:text-white hover:bg-purple-600 hover:border-transparent 
          focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 
          active:bg-purple-950">
          {btnText}
        </button>
      </div>
    </div>
  );
}
