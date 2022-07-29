const f = n => {
    const it = (i, n, result) => 
        i === n ? result : it(i+1, n, result*(i+1))
    return it(1, n, 1)
}

console.log(f(4))