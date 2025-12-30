function SliceText(str, maxLength) {
    if (str.length > maxLength) {
        if (maxLength >= 3) {
            return str.slice(0, maxLength - 3) + '...';
        }
        
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

console.log('Задача 4');
console.log(SliceText("Привееееет", 2));