function sum(...nums) {
    let sum = 0;
    for (let num of nums)
        sum += num;
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));