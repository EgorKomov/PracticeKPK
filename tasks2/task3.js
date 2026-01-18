function sortAscendingOrder(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(sortAscendingOrder([1, 2, 3, 4, 5]))
console.log(sortAscendingOrder([5, 4, 3, 2, 1]))