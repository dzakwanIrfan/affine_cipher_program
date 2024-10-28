/* eslint-disable react/prop-types */

const InputForm = ({ mode, text, a, b, setText, setA, setB, setMode, onProcess, error }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mode
            </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="encrypt">Enkripsi</option>
              <option value="decrypt">Dekripsi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teks {mode === 'encrypt' ? 'Plain' : 'Cipher'}
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder={`Masukkan teks ${mode === 'encrypt' ? 'plain' : 'cipher'}`}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nilai A
            </label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(parseInt(e.target.value))}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nilai B
            </label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value))}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      <button
        onClick={onProcess}
        className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        {mode === 'encrypt' ? 'Enkripsi' : 'Dekripsi'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputForm;