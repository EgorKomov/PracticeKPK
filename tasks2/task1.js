function sumPositiveNumber(n) {
    let sum = 0;
    for (const num of n){
        if (num>0)
            sum += num;
    }
    return sum;
}

const num = [1, 2, -3, -4, 5];
console.log(sumPositiveNumber(num));