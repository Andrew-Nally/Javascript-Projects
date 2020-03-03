function KVP_1() {
    let obj1 = {
        color: "white",
        type: "fixed speed",
        gender: "male",
        size_inches: 26,
    }

    let obj2 = {
        type: "automobile",
        color: "maroon",
        model:"jeep",
        year: 2019,
    }
    delete obj1.color;
    document.getElementById("my_bike").innerHTML = obj1.color;
    document.getElementById("cars_in_chicago").innerHTML = obj2.year;
}


document.write(typeof "This is a string" + "This is a string" + "<br>");
document.write(typeof 3958 + "\n"+ "This is a number"+"<br>");
document.write(typeof true + '\n' + "this is a boolean" + "<br>");

function no_Function(){
    document.getElementById("Not").innerHTML = !( 5 > 10);
}

function no_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}