String.prototype.firstUppercase = function(str="") {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(String.prototype.firstUppercase("raman"));
const result = "siva";
console.log(result.firstUppercase());