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

console.log(merge([999, 888, 777, 1, 9, 10, 12, 2, 3, 4, 13, 777, 888, 999], 3, 7, 11))