/* 30 days hath Apr, June, Sep, Nov
All the rest hath 31
Except Feb 28 in fine,
and 29 on leap year.
*/
// let month1 : string = "January";
// let month2 : string = "February";
// let month3 : string = "March";
// let month4 : string = "April";
// let month5 : string = "May";
// let month6 : string = "June";
// let month7 : string = "July";
// let month8 : string = "August";
// let month9 : string = "September";
// let month10 : string = "October";
// let month11 : string = "November";
// let month12 : string = "December";
var monthNum = 12;
var isLeapYear = true;
var numOfDaysInMonth;
monthNum = 254;
isLeapYear = true;
if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
    numOfDaysInMonth = 30;
}
else if ((monthNum === 2) && (!isLeapYear)) {
    console.log("Month #" + monthNum + " is not a leap year and ");
    numOfDaysInMonth = 28;
}
else if ((monthNum === 2) && (isLeapYear)) {
    console.log("Month #" + monthNum + " is a leap year and ");
    numOfDaysInMonth = 29;
}
else if (monthNum < 13) {
    numOfDaysInMonth = 31;
}
else {
    console.log("Make sure month number is between 1 and 12");
}
console.log("Month #" + monthNum + " hath " + numOfDaysInMonth + " days!");
// if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11 ){
//     console.log("Number of days in the month is 30");   
// }
// else if ( (monthNum == 2) && (isLeapYear != true) ){
//     console.log("Number of days in the month is 28"); 
// }
// else if ( (monthNum == 2) && (isLeapYear == true) ){
//     console.log("Number of days in the month is 29"); 
// }
// else {
//     console.log("Number of days in the month is 31");   
//     }
// if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11 ){
//     console.log("Number of days in the month is 30");   
// }
// else if (monthNum == 1 || monthNum == 3 || monthNum == 5 || 
//     monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12){
//     console.log("Number of days in the month is 31");   
// }
// else if ( (monthNum == 2) && (isLeapYear = false) ){
//     console.log("Number of days in the month is 28"); 
// }
// else  {
//     console.log("Number of days in the month is 29"); 
// }
