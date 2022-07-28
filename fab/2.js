
// 自己使用人类思维想出的实现方法
function fab(n) {
    const res = [0, 1]
    // i 
    for(let i=0; i<n - 2; i++) {
        res.push(res[res.length - 1] + res[res.length - 2])
    }
    return res[n - 1]
}

console.log(fab(1))