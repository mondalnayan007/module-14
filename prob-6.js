/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 78;
const isStudent = true;

if(age < 10 )
{
    console.log("No fare needed.");
}
else if(isStudent){
     console.log("You will get 50% discount.");
}
else if(age >= 60){
    console.log("You will get 15% discount.");
}
else{
    console.log("You have to pay Regular ticket fare 800 tk.");
}