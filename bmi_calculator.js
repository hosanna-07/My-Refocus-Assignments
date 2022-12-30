//calories burned per minute
let CalPerMin = 225 / 30;

//num of days Sam wants to do cycling
let NumDays = 15;

//30 mins of cycling per day
let MinOfCycling = 30;

//formula - Lost Calories
let CalBurn = CalPerMin * MinOfCycling * NumDays;

//message
console.log(`Great work, Sam! After ${MinOfCycling} minutes of cycling every day for ${NumDays} days, you may lose a total of ${CalBurn} calories.`);

//GIT_FILE