/* eslint-disable react/prop-types */
import { useState } from 'react';

// Komponen untuk menampilkan tabel konversi huruf-angka
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

// Fungsi untuk menangani modulo dengan benar untuk angka negatif
const mod = (n, m) => {
    return ((n % m) + m) % m;
};

// Komponen untuk menampilkan rumus
const FormulaDisplay = ({ mode, a, b }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Rumus {mode === 'encrypt' ? 'Enkripsi' : 'Dekripsi'}:</h2>
      <div className="space-y-4">
        {mode === 'encrypt' ? (
          <div>
            <p className="font-mono bg-gray-100 p-4 rounded-md">
              E(x) = (ax + b) mod 26
            </p>
            <p className="mt-2 text-gray-600">
              Dimana:
            </p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>x = nilai numerik dari huruf plain text (0-25)</li>
              <li>a = {a} (harus koprime dengan 26)</li>
              <li>b = {b}</li>
            </ul>
            <p className="mt-2 font-mono bg-gray-100 p-4 rounded-md">
              E(x) = ({a}x + {b}) mod 26
            </p>
          </div>
        ) : (
          <div>
            <p className="font-mono bg-gray-100 p-4 rounded-md">
              D(x) = a⁻¹(x - b) mod 26
            </p>
            <p className="mt-2 text-gray-600">
              Dimana:
            </p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>x = nilai numerik dari huruf cipher text (0-25)</li>
              <li>a⁻¹ = modular multiplicative inverse dari {a} (mod 26)</li>
              <li>b = {b}</li>
            </ul>
            <p className="mt-2 font-mono bg-gray-100 p-4 rounded-md">
              D(x) = {modInverse(a, 26)}(x - {b}) mod 26
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Utility functions untuk mathematical operations
const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a;
};

const modInverse = (a, m) => {
  for(let x = 1; x < m; x++)
    if(((a % m) * (x % m)) % m === 1)
      return x;
  return 1;
};

// Main App Component
const AffineCipherApp = () => {
  const [text, setText] = useState('');
  const [a, setA] = useState(5);
  const [b, setB] = useState(-3);
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

  const processText = () => {
    if (!validateInput()) return;

    const newSteps = [];
    const resultChars = [];
    
    text.split('').forEach((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const x = char.toLowerCase().charCodeAt(0) - 97;
        
        let result;
        if (mode === 'encrypt') {
          // Gunakan fungsi mod untuk menangani hasil negatif
          result = mod((a * x + b), 26);
          newSteps.push({
            char,
            step: 1,
            desc: `Karakter '${char}' (${x}):`,
            calc: `(${a} × ${x} + ${b}) mod 26 = ${result}`
          });
        } else {
          const aInverse = modInverse(a, 26);
          // Gunakan fungsi mod untuk menangani hasil negatif
          result = mod((aInverse * (x - b)), 26);
          newSteps.push({
            char,
            step: 1,
            desc: `Karakter '${char}' (${x}):`,
            calc: `${aInverse} × (${x} - ${b}) mod 26 = ${result}`
          });
        }

        const resultChar = String.fromCharCode(result + 97);
        resultChars.push(isUpperCase ? resultChar.toUpperCase() : resultChar);
        
        newSteps[newSteps.length - 1].result = resultChar;
      } else {
        resultChars.push(char);
      }
    });

    setSteps(newSteps);
    setResult(resultChars.join(''));
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
            onClick={processText}
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
  
        {text && !error && <FormulaDisplay mode={mode} a={a} b={b} />}
  
        {result && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Hasil:</h2>
            <div className="p-4 bg-gray-100 rounded-md font-mono">{result}</div>
          </div>
        )}
  
        {steps.length > 0 && (
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
        )}
      </div>
    </div>
  );  
};

export default AffineCipherApp;