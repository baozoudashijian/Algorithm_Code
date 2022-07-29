// 数学思路实现merge

const merge = (a, b) => 
    a.length === 0 ? b :
    b.length === 0 ? a :
    a[0] > b[0] ?
        [b[0]].concat(merge(a, b.slice(1))) :
        [a[0]].concat(merge(a.slice(1), b))

console.log(merge([1,2], [3,4]))
console.log(merge([1,3], [2,4]))
console.log(merge([1], [2,4]))
console.log(merge([1,3], [2]))
console.log(merge([], []))
console.log(merge([1], [4]))