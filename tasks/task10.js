function Recursion(arr,n) {
    if (n < 1) {
        return;
    }
    
    arr.push(n);

    Recursion(arr, n - 1);
}

console.log('Задача 10');
let array2 = [];
Recursion(array2, 3);
console.log(array2);