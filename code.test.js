const assert = require('assert');
const { tsp_hk, tsp_ls } = require('./code.js'); 
const fs = require('fs');


function generateDistanceMatrix(size) {
    const matrix = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1)
    );

    for (let i = 0; i < size; i++) {
        for (let j = i; j < size; j++) {
            matrix[i][j] = matrix[j][i];
        }
        matrix[i][i] = 0; 
    }

    return matrix;
}

function timeFunction(fn, distanceMatrix) {
    const start = process.hrtime();
    const result = fn(distanceMatrix);
    const [seconds, nanoseconds] = process.hrtime(start);
    const runtime = seconds + nanoseconds / 1e9;
    return { runtime, result };
}

const sizes = [4, 6, 8, 10, 11];
const results = [];

for (const size of sizes) {
    const matrix = generateDistanceMatrix(size);

    const hk = timeFunction(tsp_hk, matrix);

    const ls = timeFunction(tsp_ls, matrix);

    results.push({
        size,
        hkTime: hk.runtime,
        lsTime: ls.runtime,
        hkLength: hk.result,
        lsLength: ls.result,
    });

    console.log(`Size: ${size}`);
    console.log(`Held-Karp: Time = ${hk.runtime}s, Length = ${hk.result}`);
    console.log(`Local Search: Time = ${ls.runtime}s, Length = ${ls.result}`);
}

fs.writeFileSync('results.json', JSON.stringify(results, null, 2));
console.log('Results saved to results.json');
