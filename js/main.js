const resultsSection = document.getElementById('results');

// Define a method that creates an array of random number
const randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));

// Create 3 array (small, medium, large)
const numbersArray = [
    randomArray(100, 100),
    randomArray(1000, 100),
    randomArray(10000, 100)
];

function averageResults(callback, name) {
    resultsSection.innerHTML += `<h2>${name}</h2>`;
    const trials = 10;
    for (let i = 0; i < numbersArray.length; i++) {
        const numbers = numbersArray[i];
        const times = [];
        for (let j = 0; j < trials; j++) {
            // Before function execution
            const t0 = performance.now();
            callback(numbers);
            // After function execution
            const t1 = performance.now();
            times.push(t1 - t0);
        }
        // Average time for the n trials
        let average = times.reduce((acc, curr) => acc + curr, 0) / times.length;
        average = round(average, 1000000);
        // Log average and array length
        const result = `${name}: Array of ${numbers.length} elements has been treated in ${average} ms`;
        console.log(result);
        // Print result in #results section
        resultsSection.innerHTML += `<div>${result}</div>`;
    }
}

function round(number, mult) {
    return Math.round(number * mult) / mult;
}

// On button click
function onClick(callback, name) {
    averageResults(callback, name);
}

function reset() {
    resultsSection.innerHTML = '';
}