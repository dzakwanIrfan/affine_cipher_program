/* eslint-disable react/prop-types */

const ResultDisplay = ({ result }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Hasil:</h2>
      <div className="p-4 bg-gray-100 rounded-md font-mono">{result}</div>
    </div>
  );
};

export default ResultDisplay;