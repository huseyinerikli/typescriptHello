
let actualRetailPrice : number = 865;

let contestantNum1Guess : number = 600;
let contestantNum2Guess : number = 700;
let contestantNum3Guess : number = 865;
let contestantNum4Guess : number = 1000;

if (contestantNum1Guess > actualRetailPrice){
    console.log("Contestant number1 is OVER!");
    console.log("Sorry, you lose!");
}else if (contestantNum1Guess < actualRetailPrice){
    console.log("Contestant number1 is under!");
}else {
    console.log("Contestant number1 got a PERFECT MATCH!");
    console.log("You win a extra $100");
}

if (contestantNum2Guess > actualRetailPrice){
    console.log("Contestant number2 is OVER!");
    console.log("Sorry, you lose!");
}else if (contestantNum2Guess < actualRetailPrice){
    console.log("Contestant number2 is under!");
}else {
    console.log("Contestant number2 got a PERFECT MATCH!");
    console.log("You win a extra $100");
}

if (contestantNum3Guess > actualRetailPrice){
    console.log("Contestant number3 is OVER!");
    console.log("Sorry, you lose!");
}else if (contestantNum3Guess < actualRetailPrice){
    console.log("Contestant number3 is under!");
}else {
    console.log("Contestant number3 got a PERFECT MATCH!");
    console.log("You win a extra $100");
}

if (contestantNum4Guess > actualRetailPrice){
    console.log("Contestant number4 is OVER!");
    console.log("Sorry, you lose!");
}else if (contestantNum4Guess < actualRetailPrice){
    console.log("Contestant number4 is under!");
}else {
    console.log("Contestant number4 got a PERFECT MATCH!");
    console.log("You win a extra $100");
}