//goal amount
let GAmt = 10000;

//saved money
let SaveMon = 7500;

//percentge computation of remaining amount
let AmtPct = (1 - (SaveMon/GAmt))*100;

//message
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${AmtPct}% away from your goal of saving ${GAmt.toLocaleString("en-PH",{ style: 'currency', currency: 'PHP', minimumFractionDigits: 0 })}.`);