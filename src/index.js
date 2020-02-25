 function reverse (n) {
    let str = String(n);
    let arr = str.split('').reverse();
        if (arr[arr.length-1] == '-'){
            arr.pop();
        }
    
    
    return +arr.join('');
}
console.log(reverse(-120));

module.exports = reverse;
