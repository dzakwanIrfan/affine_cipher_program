import AlphabetTable from './components/AlphabetTable/AlphabetTable';
import FormulaDisplay from './components/FormulaDisplay/FormulaDisplay';
import InputForm from './components/InputForm/InputForm';
import ResultDisplay from './components/ResultDisplay/ResultDisplay';
import StepsDisplay from './components/StepsDisplay/StepsDisplay';
import { gcd } from './utils/mathCipher';
import { processAffineCipher } from './utils/cipherOperations';
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [a, setA] = useState(5);
  const [b, setB] = useState(3);
  const [mode, setMode] = useState('encrypt');
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    if (!text) {
      setError('Mohon masukkan teks');
      return false;
    }
    if (gcd(Math.abs(a), 26) !== 1) {
      setError('Nilai A harus koprime dengan 26 (GCD(a,26) = 1)');
      return false;
    }
    setError('');
    return true;
  };

  const handleProcess = () => {
    if (!validateInput()) return;
    
    const { steps: newSteps, result: newResult } = processAffineCipher(text, a, b, mode);
    setSteps(newSteps);
    setResult(newResult);
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-600">
          Affine Cipher Program
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Tabel Konversi Huruf-Angka:
          </h2>
          <AlphabetTable />
        </div>

        <InputForm
          mode={mode}
          text={text}
          a={a}
          b={b}
          setText={setText}
          setA={setA}
          setB={setB}
          setMode={setMode}
          onProcess={handleProcess}
          error={error}
        />

        {text && !error && <FormulaDisplay mode={mode} a={a} b={b} />}

        {result && <ResultDisplay result={result} />}

        {steps.length > 0 && <StepsDisplay steps={steps} />}
      </div>
    </div>
  );
};

export default App;