//Global Variable Example
var x = 5;
    function Mult_numbers_2() {
        document.write(2 * x );
    }
    function Mult_numbers_3() {
        document.write(x * 3);
    }
    Mult_numbers_2();
    Mult_numbers_3();

//Local Example
function Mult_numbers_4() {
    var x = 7;
    console.log(7 * 4);
}
function Mult_numbers_5() {
    var x = 5;
    console.log(5 * 5)
} 
Mult_numbers_4();
Mult_numbers_5();

//if statements

var background = document.querySelector("background");


function turn_Red() {
    if (5 > 4) {
      document.getElementById("turn_Red"); 
     document.body.style.backgroundColor = "red";
    }
}

function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("farewell").innerHTML = "Goodbye everyone!";
    } else {
        document.write("We say goodbye before 12");
    }
}
//if else statements - assignment p.136
function driver_License() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You are able to get your driver's license";
    }
    else {
        Drive = "You are not old enough to drive.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}

//Else/If Statements
function Time_function() {
    var Time =  new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    } 
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    } 
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}