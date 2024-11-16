String.prototype.firstUppercase = function() {
    if (this.length === 0) return;
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const result = "siva";
console.log(result.firstUppercase());