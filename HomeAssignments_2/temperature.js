//temp C to K, K = C + 273.15
//temp F to K, K = (F - 32) * 5/9 + 273.15

function convertCToKelvin(tempCelcius){
    let tempKelvin =  tempCelcius + 273.15;
    return tempKelvin;
}

function convertFToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    return tempKelvin;
}

console.log(convertCToKelvin(84)); //357.15
console.log(convertFToKelvin(95)); //308.15