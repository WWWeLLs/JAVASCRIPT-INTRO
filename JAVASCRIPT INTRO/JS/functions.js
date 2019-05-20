//FUNCTIONS HELP TO NOT REPEAT SO MANY LINES OF CODE
//ES5 WAY



//VOID MEANS NOTHING IS COMING OUT OF THIS FUNCTION, ITS NOT RETURNING ANYTHING
function myFunction()
{    
    console.log('fire!');

}   
myFunction( ); //CALL FUNCTIONS OUTSIDE IN GLOBAL - ALWAYS ADD PARENTHESE WHEN CALLING FUNCTIONS 


//FUNCTION WITH EQUATIONS
function equation1() 
{
    var num1 = 10;
    var num2 = 23;
    var total = num1 + num2;
    var avg = total/2;
    console.log(avg);

}
equation1();

//PARAMETERS TO MAKE THIS MORE DYNAMIC
function equation2(num1,num2) //TEMPORARY VARIABLES, CAN HAVE AS MANY AS WE WANT
{  
    var total = num1 + num2;
    var avg = total/2;
    console.log(avg);

}
equation2(25, 100);
equation2(40, 86);

/*
function pName(fn,ln);
{
    var fn('Wennona');
    var ln('Wells');

    var lname = (ln);
    var fname = (fn);
    console.log(lname, fname);
}
pName ('Wennona', 'Wells');
*/
/*
//ANSWER
function lastname(firstname) {
    var fullName = firstname + 'Gamer';
    console.log(fullname);
}
lastname('Candi');
*/

function nameGenerator() {
    //RANDOM NUMBER FROM 0 - 4
var randomNum1 = Math.floor(Math.random() *5); //GRABBING RANDOM NUMBER. RANDOM NAME
var randomNum2 = Math.floor(Math.random() *5);
var firstNames = ['Lil', ' Yung', 'Baby', 'Big', 'El']; //LIST OF NAMES
var lastNames = ['Tigre', ' Gucci', 'Flex', 'Sean', 'Nino'];

var fullName = firstNames[randomNum1] + ' ' + lastNames[randomNum2];
//CONCATENATE STRINGS
console.log(fullName);
}

nameGenerator();

//FULLNAME LOOP GENERATOR

for(var i=0; i < 8; i++);{ //ITERATES 8 TIMES
    nameGenerator();
}
    
alert(fullName); //USE INSPECT TO GENERATE NAMES BEHIND THE CODE
