function isPalindrom(str) {
    const reversedStr = str.split('').reverse().join('');

    return reversedStr === str;
}

console.log(isPalindrom("hello"))
console.log(isPalindrom("ded"))