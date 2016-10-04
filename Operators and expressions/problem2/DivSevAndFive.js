var number = prompt('Please input the number you wish to check for div. by 7 & 5 at the same time: ');
number=number|0;// convert to number from string;

if (number%7%5=== 0) {
    alert('This number is divisible by 7 and 5 at the same time.');
}
else {
    alert('Sorry, try again next time! :) ');
}