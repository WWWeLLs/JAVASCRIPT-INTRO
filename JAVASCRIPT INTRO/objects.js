//OBJECT Similar t. o an array but more complex has items comes in pairs
//Key value pair . An object can go into a variable, use string 
//OBJECT CAN CONTAIN AN ARRAY
//snake lettering an_object
var an_object = {
    'myKey' : 1234, //INTEGER
    'myKey2' : 566,
    'myKey3' : 999, 
    'myKey4' : [1,2,3,4] //ARRAY
};
var waggy = an_object.myKey3;
console.log(waggy);

var a_color = {
    'coYellow' : 6, 
    'coBlue' : 4,
    'coRed' : 3,
    'coGreen' : 5,
    'coOrange' : [1,2,3,4,5]
};
var colors = a_color.coGreen;
console.log(colors);

//SIMSULATE JSON DATA THAT COMES BACK FROM THE API
//USER JUST SIGNED INTO HAPPYMEOW 
//LOGIN FOR THE FIRST TIME
//INFORMATION INTO THE API AND NOWIN THE DATABASE
//USER PROFILE/ YOUR INFORMATION ONLY
//RETRIEVE API ACCESS FROM API AND DATABASE
//INFO IS NOW ON BROWSER

var UserInfo = {
    'UserId': '1',
    'Name' : 'Noemie',
    'DateJoined': '05/17/2019',
    'Age': 21,
    'Email': 'noemie@gmail.com'
};
//root is the parent div(empty div without information)
var root = document.getElementById('root');
var Name = document.createElement('h1');
Name.innerHTML = UserInfo.Name;
var Date = document.createElement('h3');
Date.innerHTML = Date.DateJoined;
var Age = document.createElement('h3');
Age.innerHTML = UserInfo.age;
var Email = document.createElement('h3');
Email.innerHTML = email.email;


root.append( Name , Date, Age, Email );








