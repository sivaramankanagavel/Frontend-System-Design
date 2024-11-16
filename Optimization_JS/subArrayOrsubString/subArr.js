function printAllSubArr(arrOrStr = "" || []) {
    let subArr = [];
    let subArrStr = "";
    for(let i = 0; i < arrOrStr.length; i++) {
        for(let j = i; j < arrOrStr.length; j++){
            for(let k = i; k <= j; k++) {
                subArrStr += arrOrStr[k];
            }
            subArr.push(subArrStr);
            subArrStr = ""
        }
    }
    return subArr;
}

const result = printAllSubArr(['a', 'b', 'c', 'd']);
console.log(result);