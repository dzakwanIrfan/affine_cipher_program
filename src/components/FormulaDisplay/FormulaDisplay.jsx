/* eslint-disable react/prop-types */
import { modInverse } from "../../utils/mathCipher";

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

export default FormulaDisplay;
