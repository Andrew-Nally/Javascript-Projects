//Concat() Method
function merge_sent() {
    var first = "I love ";
    var second = "learning to code ";
    var third = "so much ";
    var fourth = "because of ";
    var fifth = "The Tech Academy.";
    var full_sent = first.concat(second, third, fourth, fifth);
    document.getElementById("Concat-method").innerHTML = full_sent;
}
//Slice() Method
function sliced() {
    var crazy_People = "Drew and Becky lit Joseph's car on fire!";
    var not_Drew = crazy_People.slice(0,9);
    document.getElementById("Slice").innerHTML = not_Drew;
}
//toUpperCase()- search()Method

function find_Capital() {
    var find_Becky = "Drew and Becky Lit Joseph's car on fire!";
    var get_Her = find_Becky.search("Becky");
    console.log(get_Her);
    var caught_Her = "Becky";
    var who_Is_Cray = caught_Her.toUpperCase();
    document.getElementById("Catch The Criminal").innerHTML = who_Is_Cray;
}

//number to string method
function string_Number() {
    var x = 34789;
    document.getElementById("number_To_String").innerHTML = x.toString();
    console.log(x);
}

//precision method
function precision() {
    var x = 7654.7665545;
    document.getElementById("Precision").innerHTML = x.toPrecision(6);
}

//toFixed() and valueOf()
function Fix() {
var num =  3.45678;
var n = num.toFixed(1);
document.getElementById("fixed").innerHTML = n;
}
function criminal() {
    var charges_Becky = ['Arson', 'Aggravated Assault', 'Child Abuse','Kidnapping','Stalking','Harassment', 'Extortion'];
    document.getElementById("value").innerHTML = 
charges_Becky.valueOf();
}