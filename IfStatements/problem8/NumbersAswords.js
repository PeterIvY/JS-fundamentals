var number,
    rest,
    hundreds,
    search1,
    supplement,
    justDigits;
number=prompt('Please input your number in here: ', 'The range is [0 ... 999] integers only, please.');
//number=number|0; NOT NEEDED FOR NOW

if (number.length === 3) {
     hundreds = switchForDigits(number.charAt(0) | 0);
    if ((number.charAt(1) + number.charAt(2)) !== '00') {
         rest = switchForNumbers((number.charAt(1) + number.charAt(2)) | 0);
        alert('This is pronounced as: ' + hundreds + ' hundred and ' + rest);
        speak('This is pronounced as: ' + hundreds + ' hundred and ' + rest);

    } else {
        alert('This is pronounced as: ' + hundreds + ' hundred.');
        speak('This is pronounced as: ' + hundreds + ' hundred.');
    }
} else if(number.length===2){
    rest = switchForNumbers(number | 0); // this will get the number to a string and send it down to the function
    alert('This is pronounced as: ' + rest);
    speak('This is pronounced as: ' + rest);
} else if (number.length===1){
    justDigits=switchForDigits(number|0)
    alert('This is pronounced as: ' + justDigits);
    speak('This is pronounced as: ' + justDigits);
} else {
    alert('This numby is kinda wrong and out of range...');
}


function switchForDigits(number) {
    switch (number) {
        case 0:
            return 'zero';
            break;
        case 1:
            return 'one';
            break;
        case 2:
            return 'two';
            break;
        case 3:
            return 'three';
            break;
        case 4:
            return 'four';
            break;
        case 5:
            return 'five';
            break;
        case 6:
            return 'six';
            break;
        case 7:
            return 'seven';
            break;
        case 8:
            return 'eight';
            break;
        case 9:
            return 'nine';
            break;}
}

function switchForNumbers(number) {

    switch (number) {
        case 10:
            return 'ten';
            break;
        case 11:
            return 'eleven';
            break;
        case 12:
            return 'twelve';
            break;
        case 13:
            return 'thirteen';
            break;
        case 14:
            return 'fourteen';
            break;
        case 15:
            return 'fifteen';
            break;
        case 16:
            return 'sixteen';
            break;
        case 17:
            return 'seventeen';
            break;
        case 18:
            return 'eighteen';
            break;
        case 19:
            return 'nineteen';
            break;
        case 20:
            return 'twenty';
            break;
        case 30:
            return 'thirty';
            break;
        case 40:
            return 'forty';
            break;
        case 50:
            return 'fifty';
            break;
        case 60:
            return 'sixty';
            break;
        case 70:
            return 'seventy';
            break;
        case 80:
            return 'eighty';
            break;
        case 90:
            return 'ninety';
            break;}                                        // Here we switch for numbers form 10 ... 20 + 30, 40, 50, 60, 70, 80 and 90//

     search1 = number.toString().charAt(1) | 0;
    if (number > 20 && number < 30) {                           // Unified logic for 8 equivalent intervals.
        supplement = switchForDigits(search1);                   // We first check if the number is within the interval and then execute the
        return 'twenty' + ' ' + supplement;                     // function switchForDigits(search1).
    } else if (number > 30 && number < 40) {                    // Note that search1 is a variable, which is equal to
        supplement = switchForDigits(search1);                  // the last digit of the number, which is
        return 'thirty' + ' ' + supplement;                     // obtained with the aid of the charAt() function ana a bitwise or  with zero (|0).
    } else if (number > 40 && number < 50) {
        supplement = switchForDigits(search1);
        return 'forty' + ' ' + supplement;
    } else if (number > 50 && number < 60) {
        supplement = switchForDigits(search1);
        return 'fifty' + ' ' + supplement;
    } else if (number > 60 && number < 70) {
        supplement = switchForDigits(search1);
        return 'fifty' + ' ' + supplement;
    } else if (number > 70 && number < 80) {
        supplement = switchForDigits(search1);
        return 'seventy' + ' ' + supplement;
    } else if (number > 80 && number < 90) {
        supplement = switchForDigits(search1);
        return 'eighty' + ' ' + supplement;
    } else if (number > 90 && number < 100) {
        supplement = switchForDigits(search1);
        return 'ninety' + ' ' + supplement;
    }
}
