export const mod = (n, m) => {
    return ((n % m) + m) % m;
};
  
export const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
};
  
export const modInverse = (a, m) => {
    for(let x = 1; x < m; x++)
      if(((a % m) * (x % m)) % m === 1)
        return x;
    return 1;
};
  