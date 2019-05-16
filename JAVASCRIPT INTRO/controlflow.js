
var number = 1;
var otherNumber = 9;
var bunny = 'fluffy';
if(bunny =='cat'){
        console.log("you get a  fluffy bunny");
}
else {
    console.log("you get nothing");
// ===  or == MEANS IT 'IS' THIS
//IF THEN ELSE STATEMENTS
// !=   MEANS NOT EQUAL
// CANT COMPARE DIFFERENT DATA TYPES IN AN IF ELSE THEN STATEMENTS

}
var vehicle = 'truck';             //VARIABLE IS TRUCK
if(vehicle == ' car') {     //IF VEHICLE IS COMPARABLE == CAR(TRUE STATEMENT) THEN PRINT 'THIS IS A CAR'
    console.log('This is a car');

}
else {
    console.log('This is a truck');  //IF VEHICLE IS NOT COMPARABLE (FALSE STATEMENT) THEN PRINT 'THIS IS A TRUCK'
}

//IF ELSE WITH AGE
var age= 10;

if (age >= 21){
    console.log('You can enter the bar');
}

else if (age  >= 18) {
    console.log(' You can ONLY enter the bar until 9pm');

}

else if (age == 17) {
    console.log('Close Enough');
}

else {
    console.log('NOPE ACCESS DENIED');
}

// IF ELSE THEN WITH PRICES
var price  = 45.00;
if (price <= 30.00 ) {
    console.log('Coupon code offer is 10%OFF');
}
else if (price <= 40.00) {
    console.log('Coupon code offer is 15%OFF');
}
else if (price <= 50.00 ) {
    console.log ('Coupon code offer is 20%OFF');

}
else if(price <= 100.00) {
    console.log ('Coupon code offer is 30%OFF ');
}
else {
    console.log(' No discount');
}

//SWITCH USING COLORS WITH CASE (OR CONDITIONS) OF COLORS = SWITCH CAN MEAN ON OR OFF
var color = "blue";
switch (color)
{
    case    "yellow":
    console.log("you got yellow");
    break;   //break ends the loop of finding Yellow is true

    case    "blue":
    console.log("you got blue");
    break; //break ends the loop of finding Blue is true

    default:
    console.log("not my colors");


}

//SWITCH USING NUMBER WITH CASE (OR CONDITIONS) OF NUMBERS
var total = ((12 + 9) * 2); //ORDER OF OPERATION BASED ON PARENTHESES
switch (total)
{
    case    11:
    console.log("nah");
    break;   //break ends the loop of finding  is true

    case    34:
    console.log("nope");
    break; //break ends the loop of finding  is true

    case    30:
    console.log("you got it right");

    case    42:
    console.log("its actually this");

    default:
    console.log("you didnt get it");


}
//var fish; IS UNDEFINED VARIABLE

var fish;

fish = 32;
switch (fish){

    case 32 :
    console.log('a');
    break;

    case 'friendly' :
    console.log('b');
    break;

    default: 
    console.log('c');
}


//NOTES: 
//JAVASCRIPT CAN RETURN A TYPEOF DATA TYPE
if(age < 31 && typeof age === 'string')

//JAVASCRIPT !! - MEANS 'OR' 
if(age !! typeof age === 'string')