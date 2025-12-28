function factorial(n) {
    if (n<0){
        return "Факториал только для положительных чисел"
    }

    let resault = 1;
    for (let i = 2; i<= n; i++) {
        resault *= i;
    }
    return resault
}

console.log('Задача 1');
console.log(factorial(15));
console.log(factorial(0));
console.log(factorial(-5));