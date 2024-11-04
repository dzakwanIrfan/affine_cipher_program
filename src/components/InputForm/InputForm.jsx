/* eslint-disable react/prop-types */

const InputForm = ({ mode, text, a, b, setText, setA, setB, setMode, onProcess, error }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              Mode
            </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="encrypt">Enkripsi</option>
              <option value="decrypt">Dekripsi</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              Teks {mode === 'encrypt' ? 'Plain' : 'Cipher'}
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder={`Masukkan teks ${mode === 'encrypt' ? 'plain' : 'cipher'}`}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              Nilai A
            </label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(parseInt(e.target.value))}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              Nilai B
            </label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value))}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <button
        onClick={onProcess}
        className="w-full mt-6 bg-indigo-600 text-white py-2.5 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {mode === 'encrypt' ? 'Enkripsi' : 'Dekripsi'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputForm;