function one_Two_Three() {
    var num = 6 * 5;
    var X = 5;
    while ( X < 15) {
        num += "<br>" + X;
       X++;
    }
    document.getElementById("while-loop").innerHTML = num;
}

function string_Me(name) {
  var name = "Andrew";
    var string = name.length;
    return string;
}
document.write(string_Me());


var abcd = ["AAA", "BBB", "CCC", "DDD"];
var triple_Letter = "";
var Z;
function alphabet_Loop() {
    for (Z = 0; Z < abcd.length; Z++) {
        triple_Letter += abcd[Z] + "<br>";
    }
    document.getElementById("Letters").innerHTML = triple_Letter;
}
function days_Of_Week() {
    var Weekday = [];
    Weekday[0] = "Sunday";
    Weekday[1] = "Monday";
    Weekday[2] = "Tuesday";
    Weekday[3] = "Wednesday";
    document.getElementById("Days").innerHTML = "On " + Weekday[3] + "s " + "we wear pink.";

}
function constant_Function() {
    const physical_attributes = { type: "human", gender: "male", hair_color: "black", eye_color: "Brown" };
    document.getElementById("Constant").innerHTML = " This being is known as a " + physical_attributes.gender + " " + physical_attributes.type +
        " that has " + physical_attributes.hair_color + " hair and " + physical_attributes.eye_color + " eyes.";
    return
}
    function constant_Function2() {
        const physical_attributes = {
            type: "human",
            gender: "male",
            hair_color: "black",
            eye_color: "Brown",
        };
        physical_attributes.gender = "female";
        physical_attributes.height = "5'9";
        document.getElementById("Constant2").innerHTML = " This being is known as a " + physical_attributes.gender + " " + physical_attributes.type +
            " that has " + physical_attributes.hair_color + " hair and " + physical_attributes.eye_color + " eyes, And also stands " + physical_attributes.height + " inches tall.";

    
    }
var A = "Global Scope";
let Y = "Global Scope";
document.write("<br>" + Y + "<br>" + A );//global scope
{
    let X = "This cannot be accessed outside of this block";//block scope
    var B = " This does not have block scope and can be accessed from anywhere outside of these curley braces";
     document.write("<br>" + X  + "<br>" + B);
}


let G = 22;
document.write("<br>" + G);
{
  var H = 11;
  document.write("<br>" + H);
}
document.write("<br>" + H);

//The return function is used to end a function and to return something back to the  function calle.Returm alway s returns undefined unless otherwise specified and  can be used to interrupt your code / loops / functions etc.

function myFunction() {
  return Math.PI;
}
document.write(myFunction());

let tv = {
    make: "samsung",
    year: 2018,
    type: "flatscreen",
    color: "black",
    description: function () {
        return "The TV is a" + this.year + this.color + this.make + this.type + " TV.";
    }
};
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
// The break statement  stops the loop right where it breaks and  ends there
}
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number os " + i + "<br>";
}//the continue  statemnent  breakes  where place but  carries on  the next iteration and so on.
for (i = 0; i < 10; i++) {
    if (i === 5) { continue; }
    text += "The number is " + i + "<br>";
    if (i === 7) { break; }
    text += "The number is " + i + "<br>";
}
