const fib0 = (n) => { // O(2^n)
    if (n <= 2) return 1;
    return fib0(n - 1) + fib0(n - 2);
};

console.log(fib0(10));
console.log(fib0(20));
console.log(fib0(50)); // ~ 1 Quadrillion steps lol

const fib = (n, memo = {}) => { // O(n)
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

console.log(fib(10));
console.log(fib(20));
console.log(fib(100));
