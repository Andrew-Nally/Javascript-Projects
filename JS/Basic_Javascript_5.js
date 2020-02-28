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
    document.getElementById("obj1").innerHTML = obj1.color;
}
