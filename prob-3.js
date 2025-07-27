/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/



const mark = Math.floor(Math.random()*100);

 if(mark >= 90){
    console.log("You got A");
 }
 else if(mark >= 80){
    console.log("You got B");
 }
 else if(mark >= 70){
    console.log("You got C");
 }
else if(mark >= 60){
    console.log("You got D");
}
else{
    console.log("You got F...you are a feluda  ha ha ha ha ");
}