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
          console.log('The ordered numbers are as follows:' + number1 +' '+number2 + ' '+number3 +'.')

      }
        else if(number1<number3){
          console.log('The answer is: ' + number3);
          console.log('The ordered numbers are as follows:' + number3 + ' '+number2 + ' '+number1 +'.')
      }
        else {
          console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);
      }
    }
    else if (number1===number3) 
    {
        if(number2>number3){
            console.log('The answer is: ' + number2);
            console.log('The ordered numbers are as follows:' + number2 + ' '+number1 + ' '+number3 +'.')
        }
        else if(number2<number3){
            console.log('The answer is: ' + number3);
            console.log('The ordered numbers are as follows:' + number3+ ' '+number2 + ' '+number1 +'.')
        }
        else {
            console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);
        }
        
    }
    else if (number2===number3)
    {
        if(number1>number3){
            console.log('The answer is: ' + number1);
            console.log('The ordered numbers are as follows:' + number1+ ' '+number2 + ' '+number3 +'.')
        }
        else if(number1<number3){
            console.log('The answer is: ' + number3);
            console.log('The ordered numbers are as follows:' + number3 + ' '+number2 + ' '+number1 +'.')
        }
        else {
            console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);
        }
    }
    else if(number1===number2===number3){
     console.log('these numbers are all the same, so no reason to compare them. The answer is:' + number1);   
    }
}
function compareRest(x, y) {
    var comp1=x.valueOf(); // could not come up with a better way of saying get these
    var comp2=y.valueOf(); // eventough the strcat might have helped, but hey! It works, so ...

    if(comp1>comp2)
    {
        return ' '+comp1+ ' ' + comp2
    }
    else if (comp1<comp2)
    {
        return ' '+comp2+ ' ' + comp1
    }
    else
    {
        return ' '+comp1+ ' ' + comp2
    }
}

function findBiggestNumber()
{
    var temp;
    if(number1>number2)
    { // 5>4
        temp=number1;//5
        if(number1>number3){ //5>?3
            console.log('The biggest number is: ' +temp);

            var restString = compareRest(number2, number3);
            console.log('The ordered numbers are as follows:' + temp + restString +  '.')
        }
        else { // 5<6
            temp=number3;
            console.log('The biggest number is: ' +temp);
             restString = compareRest(number1, number2);
            console.log('The ordered numbers are as follows:' + temp + restString +  '.')

        }
    }
    if(number2>number1)
    { // 5>4
        temp=number2;//5
        if(number2>number3){ //5>?3
            console.log('The biggest number is: ' +temp);
             restString = compareRest(number1, number3);
            console.log('The ordered numbers are as follows:' + temp + restString +  '.')
        }
        else { // 5<6
            temp=number3;
            console.log('The biggest number is: ' +temp);
             restString = compareRest(number1, number2);
            console.log('The ordered numbers are as follows:' + temp + restString +  '.')

        }
    }
}
//function call logic
if (number1===number2||number1===number3||number2===number3||number1===number2===number3){
    checkIfNumbersMatch(); // call only if numbers are equal
}
else{
    findBiggestNumber(); // call the function and see what will print out...
}
//end of function call logic
