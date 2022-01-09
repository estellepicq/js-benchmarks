const resultsSection = document.getElementById('results');

// Define a method that creates an array of random number / objects
const randomArray = (length, content) => {
    return [...new Array(length)].map(() => content());
};

function randomNumber() {
    return Math.round(Math.random() * 100);
}

function averageResults(callback, array, name) {
    resultsSection.innerHTML += `<h2>${name}</h2>`;
    const trials = 10;
    for (let i = 0; i < array.length; i++) {
        const elements = array[i];
        const times = [];
        for (let j = 0; j < trials; j++) {
            // Before function execution
            const t0 = performance.now();
            for (let k = 0; k < elements.length; k++) {
                callback(elements[k]);
            }
            // callback(elements);
            // After function execution
            const t1 = performance.now();
            times.push(t1 - t0);
        }
        // Average time for the n trials
        let average = times.reduce((acc, curr) => acc + curr, 0) / times.length;
        average = round(average, 1000000);
        // Log average and array length
        const result = `${name}: Array of ${elements.length} elements has been treated in ${average} ms`;
        console.log(result);
        // Print result in #results section
        resultsSection.innerHTML += `<div>${result}</div>`;
    }
}

function round(number, mult) {
    return Math.round(number * mult) / mult;
}

// On button click
function onClick(callback, array, name) {
    averageResults(callback, array, name);
}

function reset() {
    resultsSection.innerHTML = '';
}