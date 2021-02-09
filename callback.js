function explain_callback(name,age,task){
    console.log('Hello',name);
    console.log('Your age',age);
    task();
}


function washHand(){
    console.log('wash hand with shop');
}
function takeShower(){
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('scroll facebook but dont like post')
}

explain_callback("Sagir uddin",17,washHand);
explain_callback("jogir uddin", 15,takeShower);