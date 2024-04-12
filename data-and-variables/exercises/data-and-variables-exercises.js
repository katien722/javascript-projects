// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
console.log(typeof "Determination");
console.log(typeof 23);
console.log(typeof "katie");


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log (typeof     17500)
console.log (typeof 17500)
console.log (typeof 'determination')


// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
console.log(milesToMars);
let hoursToMars = distanceToMarsKm / shuttleSpeedMph; 
console.log(hoursToMars);

let daysToMars = hoursToMars / 24;
console.log(daysToMars);


// Print the results of the space mission calculations below
console.log("Determination will take " + (daysToMars) + " days to reach Mars.");


// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = distanceToMoonKm / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);
console.log(daysToMoon);
console.log("Determination will take " + (daysToMoon) + " days to reach the moon.");
console.log(`Determination will take ${daysToMoon} days to reach the moon.`)


// Print the results of the trip to the moon below