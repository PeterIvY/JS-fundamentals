/**
 * Created by User33123 on 3.10.2016 г..
 */
var attempts=0;
do{
    var number = prompt('please input the number here: ');
    number=number|0;
    if(number%2===0){
        alert('This number is even! :)');
    }
    else {
        alert('This number is Odd!');
    }
    attempts+=1;
} while (attempts!==10);


