// Method 1
function uniqueArray1(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        if (uniqueArray.indexOf(currentValue) === -1) {
            uniqueArray.push(currentValue);
        }
    }

    return uniqueArray;
}

// Method 2
function uniqueArray2(arr) {
    return arr.filter((currentValue, currentIndex, currentArray) => currentArray.indexOf(currentValue) === currentIndex);
}

// Method 3
function uniqueArray3(arr) {
    return [...new Set(arr)];
}