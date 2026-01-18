function findSecondMax(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr.length >= 2 ? uniqueArr[1] : undefined;;
}

console.log(findSecondMax([25, 50, 10, 20]))