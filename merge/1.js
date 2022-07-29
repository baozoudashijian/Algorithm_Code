// 人类思维实现merge函数
/*
* a: sort从小到大排列的数组
* b: sort从小到大排列的数组
*/
const merge = (a, b) => {
    let c = [], i = 0, k = 0;

    while(i<a.length || k<b.length) {

        if(i>=a.length) {
            c.push(b[k])
            k+=1
        }else if(k>=b.length) {
            c.push(a[i])
            i+=1
        }else if(a[i] < b[k]) {
            c.push(a[i]);
            i+=1
        }else{
            c.push(b[k])
            k+=1
        }
    }
    return c
}

console.log(merge([1,2], [3,4]))
console.log(merge([1,3], [2,4]))
console.log(merge([1], [2,4]))
console.log(merge([1,3], [2]))
console.log(merge([], []))
console.log(merge([1], [4]))

