function evenify(num){
    if(num % 2 == 0){
        console.log(num, 'is even number');
    }
    else{
        console.log(num*2, 'odd number');
    }

}

nums = [12,56,23,51,42,11];

for(let  i = 0; i< nums.length; i++){
    const num = nums[i];
    evenify(num);
    
}