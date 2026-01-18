function SplitArray(arr, size) {
  const splitedArray = [];
  let index = 0;

  while (index < arr.length) {
    splitedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return splitedArray;
}

console.log('Задача 9');
const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const result1 = SplitArray(Array1, chunkSize);
console.log(result1);