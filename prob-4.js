/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/


const myMarks = 87;
   const friensMark = 68;
 
if(myMarks >= 80)
{
    if(friensMark >= 80){
        console.log("go for a lunch");
    }
    else if(friensMark < 80 || friensMark >= 60){
        console.log("good luck next time");

    }
    else if(friensMark < 60 || friensMark >= 40){
        console.log("I am keeping your  message unseen");

    }
    else if(friensMark < 40 ){
        console.log("I am going to block you");

    }

}
else{
    console.log("I am going sleep");

}