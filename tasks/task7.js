function FalseValues(arr) {
    return arr.filter(Boolean);
}

console.log('Задача 7');
const array1 = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN, 4, -0, 0n, 5];
const truthyValues = FalseValues(array1);
console.log(truthyValues);