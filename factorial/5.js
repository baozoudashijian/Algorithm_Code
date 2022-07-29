const f = (n, result) => 
    n === 1 ? result : f(n-1, n*result)

console.log(f(4, 1))