function findMaxInSubarrays(arr) {
  return arr.map(subArr => Math.max(...subArr));
}

console.log('Задача 3');
const input = [[5, 9, 20], [40, 50], [65, 77, 81, 92]];
const result = findMaxInSubarrays(input);
console.log(result);
