const AlphabetTable = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <tbody>
            <tr>
              {alphabet.map((letter) => (
                <th
                  key={letter}
                  className="border border-gray-300 px-3 py-2 bg-gray-50 text-sm md:text-base"
                >
                  {letter}
                </th>
              ))}
            </tr>
            <tr>
              {alphabet.map((_, index) => (
                <td
                  key={index}
                  className="border border-gray-300 px-3 py-2 text-center text-sm md:text-base"
                >
                  {index}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default AlphabetTable;