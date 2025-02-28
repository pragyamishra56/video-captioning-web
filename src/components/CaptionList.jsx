const CaptionList = ({ captions }) => {
  return (
    <div className="w-full max-w-lg mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Captions List</h3>
      <ul>
        {captions.map((cap, index) => (
          <li key={index} className="p-2 bg-white shadow-md rounded-lg mb-2">
            <strong>{cap.timestamp}s:</strong> {cap.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaptionList;
