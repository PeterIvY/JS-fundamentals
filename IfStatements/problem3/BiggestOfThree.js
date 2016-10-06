var number1 = prompt('Dear user, please input the first  number to compare:') ; // get data from the user
var number2 = prompt('Dear user, please input the second number to compare: ') ; // get some more data from the user
var number3 = prompt('Dear user, please input the third number to compare:') ; // if he is still there and typing and not shooting at the screen!!! :D
function convertStringNumbers() {
    number1=number1*1; // convert to numbers, but save the floating point part
    number2=number2*1;
    number3=number3*1;
}
convertStringNumbers();
function checkIfNumbersMatch() {
    if(number1===number2)
    {
      if(number1>number3){
          console.log('The answer is: ' + number1);
      }
        else if(number1<number3){
          console.log('The answer is: ' + number3);
      }
        else {
          console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);
      }
    }
    else if (number1===number3) 
    {
        if(number2>number3){
            console.log('The answer is: ' + number2);
        }
        else if(number2<number3){
            console.log('The answer is: ' + number3);
        }
        else {
            console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);
        }
        
    }
    else if (number2===number3)
    {
        if(number1>number3){
            console.log('The answer is: ' + number1);
        }
        else if(number1<number3){
            console.log('The answer is: ' + number3);
        }
        else {
            console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);
        }

    }
    else if(number1===number2===number3){
     console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);   
    }
}
checkIfNumbersMatch();

function compareNumbers()
{
    var temp;
    if(number1>number2)
    { // 5>4
        temp=number1;//5
        if(number1>number3){ //5>?3
            console.log('The answer is: ' +temp);//return 5
        }
        else { // 5<6
                console.log('The answer is: ' +number3);// 6
        }
    }
    if(number2>number1)
    { // 5>4
        temp=number2;//5
        if(number2>number3){ //5>?3
            console.log('The answer is: ' +temp);//return 5
        }
        else { // 5<6
            console.log('The answer is: ' +number3);// 6
        }
    }
}
compareNumbers(); // call the function and see what will print out...
