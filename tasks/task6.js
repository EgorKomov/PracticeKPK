function InsertArrayIntoAnother(arr1, arr2, n) {
    const result = new Array(arr1.length + arr2.length);
    
    for (let i = 0; i < n; i++) {
        result[i] = arr2[i];
    }
    
    for (let i = 0; i < arr1.length; i++) {
        result[n + i] = arr1[i];
    }
    
    for (let i = n; i < arr2.length; i++) {
        result[arr1.length + i] = arr2[i];
    }
    
    return result;
}

console.log('Задача 6');
console.log(InsertArrayIntoAnother([1, 2, 3], [4, 5], 1));