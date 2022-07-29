function f(n) {
    let i = 1, result = 1, next_i, next_result
    while(i <= n - 1) {
        next_i = i + 1
        next_result = result * next_i
        i = next_i
        result = next_result
    }
    return result
}

console.log(f(4))