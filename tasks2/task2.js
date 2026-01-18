function noDuplicate(arr) {
    return[...new Set(arr)];
}


const arr = [1, 2, 3, 4, 4, 5, 6, 1]
console.log(noDuplicate(arr));