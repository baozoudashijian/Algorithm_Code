
/* 
* ---参数---
* a: 排序的数组
* middle: 开始数组分组的中间线
*/

/* 
* ---前提---
* 0-middle 和 middle-a.length都是排好序的数组(并不是a.length/2)
*
*/
const merge = (a, middle) => {
    let i = 0, k = middle; // i 左边手指，k 右边手指
    while(i<middle && k<a.length) {
        let w = 0 // 计算出右边小于左边的个数
        while(a[i] <= a[k] && i < middle) { i+=1} // 如果左边小于右边，数组就不动
        while(a[i] >= a[k] && k < a.length) {k+=1; w+=1;}
        let part = a.splice(k - w, w)
        a.splice(i, 0, ...part)
        i += w
        middle += w
    }
    return a
}

console.log(merge([1,2,3,4], 2))
console.log(merge([1,3,2,4], 2))
console.log(merge([1,2,4], 2))
console.log(merge([1,3,2], 2))
console.log(merge([1,4], 1))
console.log(merge([1,2,6,10, 4,29,30,102,9999],4))