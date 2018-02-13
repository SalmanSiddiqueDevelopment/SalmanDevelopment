
function maxvalue(a1)
{
var num = 0;
for (i = 0; i < a1.length; i++) {
    if (typeof (a1[i]) == 'number') {
        if (a1[i] > num) {
            num = a1[i]
        }
    }
}
return num;
}
function maxvalue(a1) {
    var a2 = a1.filter(function (item) { return typeof item === 'number'; });
    var num = 0;
    for (i = 0; i < a2.length; i++) {
        if (a2[i] > num) {
            num = a2[i]
        }

    }
    return num;
}


var a1 = ['a', 'b', 1, 2,41,52,61.2];
var rest=maxvalue(a1);
console.log(rest);


