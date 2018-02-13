// var num= function(a,b)
// {
// return a+b;
// }('x','y')

// console.log(num);


//var n=function(){console.log('hello')}
//console.log(n())

// const m=12345
// var M=253
// console.log(m,M)


// console.log(sum(1,2))
// function sum(a,b)
// {
//     return a+b;// Hoisting error
// }
  
// var aa= sub(a,b){return a-b;}  //problem
// console.log(aa(2,1));

// function checkNo(b)////Number.parseFloat() and parseFloat()  example
// {
// if (isNaN(b)!='false')
// {
// a=Number.parseFloat(b)
// a=a-parseFloat(100.12);
// console.log(a);
// }
// else 
// console.log(b,'Not a number')
// }
// checkNo('-10.12')

function checkNo(b)// disuss
{
if (isFinite(b)!=false)
{
    console.log(isFinite(b))
a=Number.parseInt(b)
a=a-parseInt(100.12);
console.log("Definednumber",a);
}
else 
console.log(b,'Undefined number')
}
checkNo('-11111111111111111111111')
var kc=1/0
checkNo(kc)


// a=Number.isSafeInteger(Math.pow(2, 55));      
// b=Number.isSafeInteger(Math.pow(2, 53) - 1);  
// c=Number.isSafeInteger(NaN);
// d=Math.abs(-4.4);
// randomNo= Math.random();
// signn=Math.sign('-10')
// signn=Math.sign('+4')
// console.log('A:'+a,' B:'+b," C:"+c," Absolue:"+d," Random No:"+randomNo," Sign:"+signn)
