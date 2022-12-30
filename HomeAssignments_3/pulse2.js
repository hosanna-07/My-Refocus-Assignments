let pulse2 = 99;

function PulseRate(pulse2) {
    if ((pulse2 >= 40) && (pulse2 <=100)){
        console.log("Pulse Rate Observation: Normal Reading.");
    }else if ((pulse2 >= 101) && (pulse2 <=109)){
        console.log("Pulse Rate Observation: Acceptable to continue home monitoring.");
    }else if ((pulse2 >= 110) && (pulse2 <=130)){
        console.log("Pulse Rate Observation: Seek advice from health professionals.");
    }else if (pulse2 >= 131){
        console.log("Pulse Rate Observation: Seek urgent medical advice.");
    }else(
        console.log("Invalid Value or Pulse Rate is less than 40 beats per minute.")
    )
}

PulseRate(pulse2);