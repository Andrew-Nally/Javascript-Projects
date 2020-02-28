function myDictionary() {
    var Me = {
        Species: "Human",
        Color: "Brown",
        Race: "Mixed",
        Age: 28,
        Eye_Color: "Brown"
    };
    document.getElementById("Dictionary").innerHTML = Me.Species;
    delete Me.Race;
    document.getElementById("delete_race").innerHTML = Me.Race;
};