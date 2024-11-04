const AlphabetTable = () => {
  // Membagi alphabet menjadi beberapa chunk untuk tampilan responsive
  const createAlphabetChunks = (size) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const chunks = [];
    
    for (let i = 0; i < alphabet.length; i += size) {
      chunks.push(alphabet.slice(i, i + size));
    }
    
    return chunks;
  };

  // Generate number chunks yang sesuai dengan alphabet chunks
  const createNumberChunks = (size) => {
    const numbers = Array.from({ length: 26 }, (_, i) => i);
    const chunks = [];
    
    for (let i = 0; i < numbers.length; i += size) {
      chunks.push(numbers.slice(i, i + size));
    }
    
    return chunks;
  };

  return (
    <div className="w-full">
      {/* Small screens (1 row of 13 + 1 row of 13) */}
      <div className="block sm:hidden">
        {createAlphabetChunks(13).map((chunk, rowIndex) => (
          <table key={rowIndex} className="w-full border-collapse mb-4">
            <tbody>
              <tr>
                {chunk.map((letter) => (
                  <th key={letter} className="border border-gray-300 px-2 py-1.5 bg-gray-50 text-xs">
                    {letter}
                  </th>
                ))}
              </tr>
              <tr>
                {createNumberChunks(13)[rowIndex].map((num, index) => (
                  <td key={index} className="border border-gray-300 px-2 py-1.5 text-center text-xs">
                    {num}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>

      {/* Medium screens (1 row of 13 + 1 row of 13) */}
      <div className="hidden sm:block md:hidden">
        {createAlphabetChunks(13).map((chunk, rowIndex) => (
          <table key={rowIndex} className="w-full border-collapse mb-4">
            <tbody>
              <tr>
                {chunk.map((letter) => (
                  <th key={letter} className="border border-gray-300 px-3 py-2 bg-gray-50 text-sm">
                    {letter}
                  </th>
                ))}
              </tr>
              <tr>
                {createNumberChunks(13)[rowIndex].map((num, index) => (
                  <td key={index} className="border border-gray-300 px-3 py-2 text-center text-sm">
                    {num}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>

      {/* Large screens (1 row of 26) */}
      <div className="hidden md:block overflow-x-scroll">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              {createAlphabetChunks(26)[0].map((letter) => (
                <th key={letter} className="border border-gray-300 px-3 py-2 bg-gray-50 text-base">
                  {letter}
                </th>
              ))}
            </tr>
            <tr>
              {createNumberChunks(26)[0].map((num, index) => (
                <td key={index} className="border border-gray-300 px-3 py-2 text-center text-base">
                  {num}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlphabetTable;