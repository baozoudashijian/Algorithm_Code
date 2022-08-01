const merge = (a, start, middle, end) => {
    /* 
    *
    * start - middle是排好序的
    * middle - end是排好序的
    * 要让 start - end排好序
    */
    let i = start, k = middle; // i 左边手指，k 右边手指
    while (i < middle && k < end) {
        let w = 0 // 计算出右边小于左边的个数
        while (a[i] <= a[k] && i < middle) { i += 1 } // 如果左边小于右边，数组就不动
        while (a[i] >= a[k] && k < end) { k += 1; w += 1; }
        let part = a.splice(k - w, w)
        a.splice(i, 0, ...part)
        i += w
        middle += w
    }
    return a
}

const sort = arr => 
    inplace_sort(arr, 0, arr.length)

const inplace_sort = (arr, start, end) => {
    if(end - start <= 1) { return }
    let middle = parseInt((start + end) / 2)
    console.log(1)
    inplace_sort(arr, start, middle)
    console.log(2)
    inplace_sort(arr, middle, end)
    merge(arr, start, middle, end)
    return arr
}

console.log(sort([1, 2, 9, 4]))
console.log(sort([1, 199, 27, 93, 124, 4903, 4]))