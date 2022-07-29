
const merge = (a, b) =>
    a.length === 0 ? b :
        b.length === 0 ? a :
            a[0] > b[0] ?
                [b[0]].concat(merge(a, b.slice(1))) :
                [a[0]].concat(merge(a.slice(1), b))

const sort = arr => {
    let k = arr.length
    if(k === 1) { return arr }
    let left = arr.slice(0, parseInt(k / 2))
    let right = arr.slice(parseInt(k / 2))

    return merge(sort(left), sort(right))
}
