function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log('Задача 2');
const text = "Апельсин Мандарины Ёлка Дом";
const longest = findLongestWord(text);
const length = longest.length
console.log(length);