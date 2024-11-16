function flattenObj(obj, parentKey = "", result = {}) {
    for(const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if(typeof obj[key] === "object" && obj[key] !== null) {
            flattenObj(obj[key], newKey, result);
        }else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

const nestedObject = {
    a: 1,
    b: {
      b1: 2,
      b2: {
        b21: 3,
        b22: 4
      }
    },
    c: 5
};

const result = flattenObj(nestedObject);
console.log(result);