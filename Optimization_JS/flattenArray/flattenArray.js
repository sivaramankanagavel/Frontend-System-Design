function flattenArr(arr) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            result.push(...flattenArr(arr[i]))
        }else {
            result.push(arr[i])
        }
    }
    return result;
}

const result = flattenArr([1, [2], [3, [4]]]);
console.log(result);