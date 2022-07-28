const f = n => 
    n === 1 ? 1 : n * f(n - 1)

console.log(f(4))