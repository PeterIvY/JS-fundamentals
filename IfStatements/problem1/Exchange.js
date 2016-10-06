var number1 = prompt('Dear user, please input the first number') ; // get data from the user
var number2 = prompt('Dear user, please input the second number') ; // get some more data from the user
number1=number1|0; // convert to numbers
number2=number2|0;
function compareNumbers() {
    if(number1>number2){
        console.log(number2 + ' ' + number1);
    }
    else {
    console.log(number1 + ' ' + number2);
    }
}
compareNumbers(); // call the functio and see what happens...

