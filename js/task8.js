function IdenticalSymbols(arr) {
    if (typeof arr[0] != 'string' || typeof arr[1] != 'string' || arr.length != 2 || !Array.isArray(arr)){
        return "Ошибка"
    }

    const [str1 , str2] = arr

    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    for (let char of lowerStr2){
        if (!lowerStr1.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log('Задача 8');
console.log(IdenticalSymbols(["aabbcc", "abc"]))
console.log(IdenticalSymbols(["Aaaa", "aaaa"]))
console.log(IdenticalSymbols(["", "abcd"]))
console.log(IdenticalSymbols(["Hello", "Helo"]))