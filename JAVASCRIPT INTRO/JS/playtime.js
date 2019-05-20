

function changeDiv(){
    var firstDiv = document.getElementById('div1') 
    firstDiv.style.padding = '2.5rem';
    firstDiv.style.background = 'Blue';
    firstDiv.style.color = 'White';
}
changeDiv();

// function newPara() {
//     var paraDiv('newPara')
//     paraDiv.style.position = 'float';

// }
// newPara();


function bug() {
    var secondDiv = document.getElementById('div2');
    var heading1 = document.createElement('h1');
    heading1.innerHTML = 'GoodBye World';
    secondDiv.appendChild(heading1);
}


function showHide() {
    var details = document.getElementById('details');
    if (details.style.display === 'none') 
    {           //show details
        details.style.display = 'block';
    }
    else if(details.style.display === 'block') {
        //hide details
        details.style.display = 'none';

    }




}

