function removeDuplicate(arr) {
    let result = new Set(arr);
    return [...result];
}

const result = removeDuplicate([1, 3, 4, 1, 2, 6, 7, 2, 3]);
console.log(result);