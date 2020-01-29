console.log("Hello World");
var x = 1;
//var y = [1];
function scopeDemo(y1) {
    console.log(x)
    let a = 3, b = 4, c = 5;
    x1[0] = 500;
    console.log(a);
    console.log(b);
    console.log(c);
    if(true) {
        var x = 0;
    }
    return a;
}
<<<<<<< HEAD
console.log(scopeDemo(y)+10);
console.log(y);
=======
scopeDemo(x);
console.log(x);
>>>>>>> 64d01955e21d788072f8747da3667ef80b5707d2
