let pulse = 100;

function SP02(pulse) {
    if (pulse > 95){
        console.log("Oxygen Saturation Observation: Normal Reading.");
    }else if (pulse == 95){
        console.log("Oxygen Saturation Observation: Acceptable to continue home monitoring.");
    }else if ((pulse >= 92) && (pulse < 95)){
        console.log("Oxygen Saturation Observation: Seek advice from health professionals.");
    }else if (pulse < 92){
        console.log("Oxygen Saturation Observation: Seek urgent medical advice.");
    }else(
        console.log("Invalid Value.")
    )
}

SP02(pulse);