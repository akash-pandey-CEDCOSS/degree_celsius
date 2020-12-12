function onSubmit() {
    debugger;
    var dgr = document.getElementById("select").value;


    if (dgr == "cel") {
        cel = document.getElementById("temp").value;
        cel = parseFloat(cel);
        var fah = (cel * (9 / 5)) + 32;
        document.getElementById("display").value = fah;
        document.getElementById("change").innerHTML = "Celsius to Fahrenhiet";


    } else if (dgr == "fah") {
        fah = document.getElementById("temp").value;
        fah = parseFloat(fah);
        var cel = ((5 / 9) * fah - 32);
        document.getElementById("display").value = cel;
        document.getElementById("change").innerHTML = "Fahrenhiet to Celsius";
    }
}






