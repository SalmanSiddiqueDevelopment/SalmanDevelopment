

a1=[1,2,3,'a','b'];////entries example
var a=a1.entries();
a1.forEach(function(item,index,Array)
{
    console.log(a.next().value);
})
// another method
var a = [1,2,3,'a','b'];
var pk = a.entries();

for (let e of pk) {
  console.log(e);
}
///////////////////////////
a1=[1,2,3,4];
a2=['a','b','c'];
var a3=a1.concat(a2);//concat two array
console.log(a3);
////////////////////////////////////
var a1=[1, 2, 3, 4, 5].copyWithin(-2);//copyWithin
console.log(a1);


//add comment