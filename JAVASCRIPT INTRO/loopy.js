//Variables

var books = [
    'El Gato Grandae',
    'El Tigre Super Coll',
    'Hunger Games',
    'Diary of a Wimpy Kid'

];

//forEach loop //list of books is array //element or item is temporary //each loop will print one by one of the number of list in array
//This is global scope
books.forEach(element =>  
    
    {
    console.log(element);
    console.log('loop');
}); 
//This is local scope


/*local scope  Anything within brackets {} forEach element do this function -local Code scope will only execute within the loop
//    (element => { console.log(element);
    console.log('loop');
})*/

//global scope var books because it is in the javascript not within the {} braces  - global code scope outside of {} braces


//Complex loop
//i will continue to loop, as long as i is less than the number in the books list of 4, loop until stop reaches max of 4
for(var i = 0; i < books.length; i++){
    console.log(i);

    //local scope
    var x = books[i];  //Whereever i as index is, it will represent number position of books in loop iteration

    console.log(x);   //x represents the variable name of books to be console printed
}
//Infinite loop can happen if i < is replaced with 1 

//MAP loops es6 way -  allows you to apply functions Each time will loop 
var books2 = books.map(item => {    
    return item + ': The Return'; //concatenations together

});
console.log(books2);  //printed out books2

//filter loops if it meets a certain criteria, with a conditional statement 
var books3 = books.filter( item =>{ 
   return item.length > 13;     // return requirement if any character count within a book is greater than 13
   //space can also be counted as a string 
});
console.log(books3);


//PRACTICE forLoop

var sports = [' volleyball', 'basketball', 'tennis', 'soccer'];
console.log(sports);

for (var s = 0; s < sports.length; s++){
    console.log(s);
    var x = sports[s];
    console.log(x);

}




