var elementFirst = document.body.childNodes[3];
var elementSecond = document.body.childNodes[5];
var elementThird = document.body.childNodes[7];
var elementForth = document.body.childNodes[11];
var elementFifth = document.body.childNodes[9];

setTimeout (del1,2000);
function del1(){
    elementFirst.remove();
};
setTimeout (del2,5000);
function del2(){
    elementSecond.remove();
};
setTimeout (del3,8000);
function del3(){
    elementThird.remove();
};
setTimeout (del4,11000);
function del4(){
    elementForth.remove();
};
setTimeout (del5,10000);
 function del5(){
    elementFifth.remove();
};
