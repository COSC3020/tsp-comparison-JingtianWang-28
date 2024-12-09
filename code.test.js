const { tsp_hk } = require('./hk.js'); // Replace './file.js' with your Held-Karp file path
const { tsp_ls } = require('./ls.js'); // Replace './file.js' with your Local Search file path
const fs = require('fs');

// Generate a random symmetric distance matrix
function generateDistanceMatrix(size) {
    const matrix = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1)
    );

    // Ensure symmetry
    for (let i = 0; i < size; i++) {
        for (let j = i; j < size; j++) {
            matrix[i][j] = matrix[j][i];
        }
        matrix[i][i] = 0; // Diagonal is 0
    }

    return matrix;
}

// Run and time a function
function timeFunction(fn, distanceMatrix) {
    const start = process.hrtime();
    const result = fn(distanceMatrix);
    const [seconds, nanoseconds] = process.hrtime(start);
    const runtime = seconds + nanoseconds / 1e9;
    return { runtime, result };
}

// Experiment parameters
const sizes = [4, 6, 8, 10, 12, 14, 16];
const results = [];

for (const size of sizes) {
    const matrix = generateDistanceMatrix(size);

    // Held-Karp
    const hk = timeFunction(tsp_hk, matrix);

    // Local Search
    const ls = timeFunction(tsp_ls, matrix);

    // Store results
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

// Save results to a file
fs.writeFileSync('results.json', JSON.stringify(results, null, 2));
console.log('Results saved to results.json');
