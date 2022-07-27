const arr = [43,90,248,2]
const maxOfTwo = (a, b) => a > b ? a : b

const max = ([first, ...others]) => 
    others.length < 1 ? first : maxOfTwo(first, max(others))

console.log(max(arr))