function addNumber(num1, num2){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
    
    }
    return sum;
}
var result = addNumber(5,8,9,4,6);
console.log(result);