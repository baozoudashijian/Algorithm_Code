const arr = [43,90,248,02,424,820,93]

function max(arr) {
    let currentMax = arr[0]
    for(let i=1; i< arr.length; i++) {
        if(arr[i] > currentMax) {
            currentMax = arr[i]
        }
    }
    return currentMax
}

console.log(max(arr))