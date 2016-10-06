var number1 = prompt('Dear user, please input the first number') ; // get data from the user
var number2 = prompt('Dear user, please input the second number') ; // get some more data from the user
number1=number1*1; // convert to numbers, but could also be folats, not just ints
number2=number2*1;

function checkMultiplicationResult() {

    if (number1 > 0) 
    {
        if (number2 > 0) {
            console.log('the result of the multiplication will be positive.');
        }
        else if (number2 < 0) {
            console.log('the result of the multiplication will be negative.');
        }
        else {
            console.log('the result of the multiplication will be equal to 0(zero).');
        }

    }
    else if (number1 < 0) 
    {
        if (number2 > 0) {
            console.log('the result of the multiplication will be negative.');
        }
        else if (number2 < 0) {
            console.log('the result of the multiplication will be positive.');
        }
        else {
            console.log('the result of the multiplication will be equal to 0(zero).');
        }

    }
    else
    {
        console.log('the result of the multiplication will be equal to 0(zero).'); // no point in other checks, it will be always zero...
    }
}
checkMultiplicationResult(); // call the function and see what happens...

