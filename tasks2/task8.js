function isTask8(str, k) {
    if (k <= 0) return str;
    return str.split('').map(c => c.repeat(k)).join('');
}

console.log(isTask8("abcd", 3))