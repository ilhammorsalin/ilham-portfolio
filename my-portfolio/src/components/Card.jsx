const Card = ({ title, description, techList }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-amber-200"></div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-700">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {techList &&
            techList.map((techName, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm"
              >
                {techName}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
