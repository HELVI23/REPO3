//console.log("BEFORE CONDITIONAL")
//let random = Math.random();
//}

//if (random >= 0.5) {
//  console.log("Your number is greater than 0.5!!!")
//  console.log(random);
//}


//const dayOfWeek = 'Monday';
//if (dayOfWeek === 'Monday') {
// console.log("UGHHH I HATE MONDAYS")
//}
//else if (dayOfWeek === 'Saturday') {
//console.log("YEE I LOVE SATURDAYS!")
//}

//else if (dayOfWeek === 'FRIDAY') {
// console.log("WEEK END!");
//}


//const age = 8;

//if (age < 5) {
//console.log("You are a baby!! You get in for free.")
//}
//else if (age < 10) {
//console.log("You are a child you pay $10.")
//}
//else if (age < 65) {
//console.log("You are an adult. You pay $20.")
//}


//const dayOfWeek = prompt('ENTER A DAY').toLowerCase();
//if (dayOfWeek === 'Monday') {
//console.log("UGHHH I HATE MONDAYS")
//}
//else if (dayOfWeek === 'Saturday') {
//console.log("YEE I LOVE SATURDAYS!")
//}
//else if (dayOfWeek === 'FRIDAY') {
//console.log("WEEK END!");
//}

//else if (dayOfWeek === 'TUESDAY') {
// console.log("HIENO!");
//}
//else if (dayOfWeek === 'WEDNESDAY') {
// console.log("ONPA HIENO!");
//}
//else if (dayOfWeek === 'THURSDAY') {
//console.log("NÄYTÄÄ MUKAVALTA!");
//}




//console.log("BEFORE CONDITIONAL")
//let random = Math.random();


//if (random < 0.5) {
// console.log("Your number is LESS than 0.5!!!")
// console.log(random);
//} //else {
// console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!")
//}
//console.log(random);




//const age = 67;
//if (age < 5) {
//console.log("You are a baby!! You get in for free.")
//}
//else if (age < 10) {
//console.log("You are a child you pay $10.")
//}
//else if (age < 65) {
//console.log("You are an adult. You pay $20.")
//}
//else {
//console.log("You are a senior. You pay 10$.")
//}

//function getColor(phrase) {

//}
//if (phrase === 'stop') {
//console.log('red');
//}
//else if (phrase === 'slow') {
//console.log('yellow');
//}

//else if (phrase === 'go') {
//console.log('green');
//}

//console.log('purple');
//}

const password = prompt("please enter a new password");
//password must be 6+ characters
if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!")

} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}
//password cannot include space
if (password.indexOf('') === -1) {
    console.log("Good job! No space!")
} else {
    console.log("Password cannot contain spaces!")
}