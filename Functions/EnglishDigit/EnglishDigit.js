var result,
    search,
    len,
    res1,
    print;

function inputNumber() {
    var number;
    do
    {   number = prompt('Dear user, please input the desired number:') ; // get data from the user
        if(!isNaN(number))
        {
            break;
        }
        else {
            console.log('Dear user, this is not a digit, but a number... Please try again.');
        }
    } while (1);
    number.toString(); // do the number as sting again...
    return number;
}

function settingTheStage () {
    result = inputNumber(); // result will be a string number!!! 
    len = result.length;
    search = (result.charAt(len-1))|0; // it is the last char converted to a number 
    res1 = lastDigit(search); 
    return res1;
}

function lastDigit(x) {
    var digit;
    switch (x){
        case 0: digit= 'zero'; 
            break;
        case 1: digit='one';
            break;
        case 2: digit='two';
            break;
        case 3: digit='three';
            break;
        case 4: digit='four';
            break;
        case 5: digit='five';
            break;
        case 6: digit='six';
            break;
        case 7: digit='seven';
            break;
        case 8: digit='eight';
            break;
        case 9:digit='nine';
            break;
    }
    return digit;
}
print = settingTheStage();
console.log('The result of your search is: ' + print);


