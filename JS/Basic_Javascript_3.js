function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 X 8= " + simple_Math;
}

function division() {
    var divide_by_two =  100 / 2;
    document.getElementById("Math4").innerHTML = "100 / 2 = " + divide_by_two;
}

function more_Math() {
    var simple_Math = ( 1 + 2) * 3 / 4 -5;
    document.getElementById("Math5").innerHTML= "1 plus 2, multiplied by 3. divided by 4 and the subtracted by 5 equals " + simple_Math;
}

window.alert(Math.random() * 100);

"Math object allows you to perform tasks on numbers. There are methods theobject uses such as random, floor, ceiling, absolute, round ..."
function  mathObjects() {
    var methods = Math.floor(4.7)
document.getElementById("demo").innerHTML= methods;
}
