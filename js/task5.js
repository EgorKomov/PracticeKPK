function TextStr(str) {
    const lowerCaseStr = str.toLowerCase();

    const words = lowerCaseStr.split(' ');

    const TextStr = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return '';
    });

    return TextStr.join(' ');
}

console.log('Задача 5');
console.log(TextStr("аПЕЛЬСИН АРБУЗ яблоко"));
console.log(TextStr("привет мир!!!"));