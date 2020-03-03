function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
};

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to" : "You can ";
    document.getElementById("Vote").innerHTML = Can_vote + "  vote!";
};

function Bike(Color, Gender, Type, Price) {
    this.Bike_Color = Color;
    this.Bike_Gender = Gender;
    this.Bike_Type = Type;
    this.Bike_Price = Price;
}
var Drew = new Bike("White", "Male", "Fixed Speed", "$199.99");
function myBike() {
    document.getElementById("New_and_This").innerHTML = 
    "Drew rides a " + Drew.Bike_Color + " " + Drew.Bike_Type + " bike. It cost him "
     + Drew.Bike_Price + " and is considered to be a " + Drew.Bike_Gender + " bike.";
};

function Family_Pet(name, type, age) {
	this.petName = name;
	this.petType = type;
	this.petAge = age;
}

var myPet = new Family_Pet("Reese", "dog", "3months");

function Pet() {
	document.getElementById("JS_Constructor").innerHTML =
		"My family pet was a " + myPet.petType + " named " + myPet.petName + " that we got when he was only " + myPet.petAge + " old.";
}


function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
            Plus_one();
            return Starting_point;
        }
    }


function sub_Function() {
    document.getElementById("Nested_Function").innerHTML = Subtract();
    function Subtract() {
        var Begin_Num = 10;
        function Minus_two() {Begin_Num -= 2;}
            Minus_two();
            return Begin_Num;
        }
    }

