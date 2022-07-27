// const arr = [43,90,248,02,424,820,93]
const arr = [43,90,248,2]

// 还真是会判断length = 1
function max(arr) {
    if(arr.length === 1) { return arr[0] }
    // console.log(arr.slice(1))
    const otherMax = max(arr.slice(1))

    console.log(arr, arr[0], otherMax, '123')
    return arr[0] > otherMax ? arr[0] : otherMax
}

console.log(max(arr))