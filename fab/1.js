function fab(n) {
    if(n === 1) {
        return 0
    }
    if(n === 2) {
        return 1
    }
    return fab(n - 1) + fab(n - 2)
}
// 0,1,1,2,3,5,8,13,21,34
// console.log(fab(40)) // 较快
console.log(fab(45)) // 超级慢