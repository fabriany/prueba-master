function crearArrayImpares(x) {
    return Array(x).fill().map((_, i) => i + 1).filter(num => num % 2 !== 0);
}

const x = 9; 
const arreglo = crearArrayImpares(x);
console.log(`los impares de 1 a ${x} son:`, arreglo);