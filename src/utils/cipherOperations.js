import { mod, modInverse } from './mathCipher';

export const processAffineCipher = (text, a, b, mode) => {
  const steps = [];
  const resultChars = [];

  text.split('').forEach((char) => {
    if (char.match(/[a-zA-Z]/)) {
      const isUpperCase = char === char.toUpperCase();
      const x = char.toLowerCase().charCodeAt(0) - 97;
      
      let result;
      if (mode === 'encrypt') {
        result = mod((a * x + b), 26);
        steps.push({
          char,
          step: 1,
          desc: `Karakter '${char}' (${x}):`,
          calc: `(${a} × ${x} + ${b}) mod 26 = ${result}`
        });
      } else {
        const aInverse = modInverse(a, 26);
        result = mod((aInverse * (x - b)), 26);
        steps.push({
          char,
          step: 1,
          desc: `Karakter '${char}' (${x}):`,
          calc: `${aInverse} × (${x} - ${b}) mod 26 = ${result}`
        });
      }

      const resultChar = String.fromCharCode(result + 97);
      resultChars.push(isUpperCase ? resultChar.toUpperCase() : resultChar);
      
      steps[steps.length - 1].result = resultChar;
    } else {
      resultChars.push(char);
    }
  });

  return {
    steps,
    result: resultChars.join('')
  };
};