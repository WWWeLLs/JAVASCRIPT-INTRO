//HW Create a "choose your own adventure" story

/*
Have the user make choices and then have each outcome run through conditional statements and 
fire off a couple of functions. For example:

var hero = 'Warrior';
if(hero === 'Mage') { console.log('Hello, powerful ' + hero); }
else if (hero === 'Warrior') { console.log('Hello, great ' + hero); }
else { console.log('You did not choose!'); }

/*
var hero = 'Warrior';
if(hero === 'Mage') 
{console.log('Hello, powerful ' + hero); }

else if (hero === 'Warrior') 
{console.log('Hello, great ' + hero);}
else 
{ console.log('You did not choose!'); }

//or

var hero = 'Mage';
if(hero === 'Mage') 
{console.log('Hello, powerful ' + hero); }

else if (hero === 'Warrior') 
{console.log('Hello, great ' + hero);}
else 
{ console.log('You did not choose!'); }
*/

//TRAVEL TO NATIONAL PARKS. IMAGINE A CONVERSATION ABOUT HIKING 
//ASK THE PERSON IF THEY HAVE TRAVELED & HIKED THE NATONAL PARKS BEFORE
var travelHikeParks = 'Yes' //IF ANSWER IS YES, NO, OR NOT INTERESTED
if (travelHikeParks === 'Yes') 
    {console.log('Which National Park have you traveled to and hiked?');}   //WHEN ANSWER IS YES

else if (travelHikeParks === 'No')    //WHEN ANSWER IS NO
    {console.log('These are the National Parks I have traveled to and hiked. They are, Zion Canyon, Bryce Canyon, Antelope Canyon, and The Grand Canyon');}

    else  //WHEN ANSWER IS NOT INTERESTED
    {console.log('Not Interested');}


//FUNCTION FOR WATER/HIKE
    function waterConsumption(liter, hiketimehours)
    {  
        var totalWaterConsumption = liter * hiketimehours;
        console.log(totalWaterConsumption + '' + ' liter of water');
    
    }
    waterConsumption(.5, 5); //HALF LITER PER EVERY 1 HOUR OF HIKETIME

    