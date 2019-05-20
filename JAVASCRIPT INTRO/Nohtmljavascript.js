/*HW HTML and JS. 
Webpage  htmljavascript.html
with only an empty div, and a button. When I press the button, a function is fired off 
that creates all elements in the webpage within that div, and hides the button (hint: display: none). 

Make sure you create divs for your regular elements*/

function buttonGM() {
var gMorning = document.getElementById("gMorning");
if (gMorning.style.display === "none")
{
    gMorning.style.display = "block"
}
else if (gMorning.style.display === "block")
{
     gMorning.style.display = "none";
}
