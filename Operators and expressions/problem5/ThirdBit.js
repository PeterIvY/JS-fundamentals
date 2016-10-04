var number = prompt('Please input the desired number here: '); // prompt to the user fort obtaining the string of the desired number
// should be checked for wrong input
number=number|0; // convert string to number

function dec2bin(number){
    return (number >>> 0).toString(2);
}
var binaryNum = dec2bin(number);
if (binaryNum[binaryNum.length-3] =='0') //get the length of the binary number and address the 3rd bit
{
    alert (' Dear user, the third bit of your binary number ' + binaryNum + ' is equal to 0');
// alert user if third bit is 0 + show him his glorious number;
}
else
{
    alert (' Dear user, the third bit of your binary number ' + binaryNum + ' is equal to 1');
    // alert user if third bit is 1 + show him his glorious number;
}
