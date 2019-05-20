/*Please create a webpage with only an empty div, 
and a button. When I press the button, a function 
is fired off that creates all elements in the webpage 
within that div, and hides the button (hint: display: none). 

Make sure you create divs for your regular elements.*/

// Good Morning

// function visibleButton() {
//     var div = document.getElementById('buttonDiv');
//     if (div.style.display === 'none') {
//         div.style.display = 'block';

//     } else if (div.style.display === 'block') {
//         div.style.display = 'none'; 
//     } 
// } 

// visibleButton();

//Elements


   
//Button Visibility if the display is none execute, anything else execute code
function btnAppear() {
    var buttonShow = document.getElementById('buttonShow');
        
    var heading = document.getElementById('h1Div');
    heading.innerHTML= 'Good Morning'
    heading.style.background = 'yellow';
    heading.style.color = 'black';
    heading.style.fontSize = 'xx-Large';
    heading.style.fontFamily = 'Impact,Charcoal,sans-serif'
    buttonShow.appendChild(heading);


if( buttonShow.style.display === 'none') {
    buttonShow.style.display = 'block'; 
}
    else if (buttonShow.style.display == 'block') {
    buttonShow.style.display = 'none';
}
document.getElementById('hides').style.visibility = 'hidden';
}

