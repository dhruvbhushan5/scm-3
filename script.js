const calculatetemp = () => {
    const numbertemp = parseFloat(document.getElementById("temp").value);
    const tempselected = document.getElementById("temp_diff");
    const valuetemp = tempselected.options[tempselected.selectedIndex].value;

    const ctof = (celsius) => {
        let fahrenheit = Math.round((celsius * 9/5) + 32);
        let kelvin = Math.round(celsius + 273.15);
        return [fahrenheit, kelvin];
    }

    const ftoc = (fahrenheit) => {
        let celsius = Math.round((fahrenheit - 32) * 5/9);
        let kelvin = Math.round((fahrenheit - 32) * 5/9 + 273.15);
        return [celsius, kelvin];
    }

    const ktoc = (kelvin) => {
        let celsius = Math.round(kelvin - 273.15);
        let fahrenheit = Math.round((kelvin - 273.15) * 9/5 + 32);
        return [celsius, fahrenheit];
    }

    let result;

    if(valuetemp === "cel"){
        result = ctof(numbertemp);
        document.getElementById("resultcontainer").innerHTML = `${result[0]}°Fahrenheit and ${result[1]}°Kelvin`;
    }
    else if(valuetemp === "fah"){
        result = ftoc(numbertemp);
        document.getElementById("resultcontainer").innerHTML = `${result[0]}°Celsius and ${result[1]}°Kelvin`;
    }
    else {
        result = ktoc(numbertemp);
        document.getElementById("resultcontainer").innerHTML = `${result[0]}°Celsius and ${result[1]}°Fahrenheit`;
    }
}