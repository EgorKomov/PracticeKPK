function splitArray(arr) {
    const evens = [];
    const odds = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            evens.push(arr[i]);
        }
        else {
            odds.push(arr[i]);
        }
    }
    return [evens, odds];
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(splitArray(arr1))