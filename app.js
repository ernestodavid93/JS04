// Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

var bank = new Array('Sofia', 'David', 'Juan');
console.log(bank);

// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

bank.push('Sara', 'Augustin');
bank.shift();
console.log(bank);

// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

bank.splice(1,0,'Renata');
bank.push('Elena');
console.log(bank);

// Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

for(let i = 1; i<=5; i++){

    let star = "*";
    console.log(star.repeat(i) + "");
}

// *  
// * *  
// * * *  
// * * * *  
// * * * * *

// Exercise #3
// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
var xValue=5;
 while(xValue!=0){
     console.log(xValue);
     xValue-=0.5;
 }


// - Print all the odd numbers between 1 - 100.

var i=0;
while(i<100){
    i++;
    if(i%2==1){
        console.log(i);
    }
}
// - Write a method with a while loop to print 1 through n in square brackets. 

var n=6; 
var j=1;

while(0<n){
    console.log("["+j+"]");
    n--;
    j++;
    
}
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

var n=5;
var suma=0;
var i=1;

while(i<=n){
    console.log(i);
    suma=suma+i;
    i++;
}