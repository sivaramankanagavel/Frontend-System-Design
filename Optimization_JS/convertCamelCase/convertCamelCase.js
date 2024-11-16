function camelCase(input = "") {
    let result = "";

    for(let i = 0; i < input.length; i++){
        let char = input[i];

        if(char === char.toUpperCase()){
            result += "_";
            result += char;
        }
        else {
            result += char;
        };
    }

    return result;
}

let result = camelCase("thisIsATest");
result = result.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("_");
console.log(result);