/* eslint-disable react/prop-types */

const StepsDisplay = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Langkah-langkah:</h2>
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="p-4 bg-gray-100 rounded-md">
            <div className="font-medium">{step.desc}</div>
            <div className="font-mono mt-2">{step.calc}</div>
            <div className="mt-2 text-indigo-600">
              Hasil: &apos;{step.result}&apos;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsDisplay;