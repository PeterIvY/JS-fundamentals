var count,
    len,
    maxLen,
    number,
    reversedNumber,
    reversedFolatNumber,
    reversibleNumber,
    okCanc; // comes from ok/cancel - the selection of the confirm box.
    arr = [];
maxLen=prompt('Dear user, please select the amount of digits in your number:','Example: 1, 2, 3, 4 ...');
maxLen = maxLen|0; // here we have the maximal length of the user's number

function inputNumber(razryad) {
    do
    {   number = prompt('Dear user, please input the desired number:') ; // get data from the user
        if(!isNaN(number))
        {
            if (number.length===razryad) {
                break; // here it is obvious that we work with integers if razryad is equal to 3, this means a three-digit number and so on
            } else if (number.length!==razryad) { // if it is floating point it will be like 7  or whatever amount of symbols...
                if(number.charAt(razryad)==='.'){
                   break; // if it is floating point, I will just go and break
                } else {
                    number = 0; // they do not match, so it is better to clear number...
                    maxLen = 0; // and also clear maxLen
                    okCanc = confirm('Would it be OK to redefine the length of the number?'); // will return TRUE if OK is pressed and FALSE if Cancel is pressed...
                    if (okCanc) {
                        maxLen = prompt('Dear user, please select the amount of digits in your number:', 'Example: 1, 2, 3, 4 ...');
                        maxLen = maxLen | 0;
                                }

                    else {
                        alert('Dear user the program will now end with some errors. Please press F5 to refresh and start anew.');
                         }
                     }
                }
        }

        else {
            console.log('Dear user, this is not a number... Please try again.');
        }
    } while (1);

    number.toString(); // do the number as sting again...
    return number;
}
reversibleNumber = inputNumber(maxLen);
if (reversibleNumber.charAt(maxLen)!=='.'){
    reversedNumber = numberReverse(reversibleNumber, maxLen);
    console.log('The reversed number is:' + reversedNumber);

} else {
    reversedFolatNumber = floatNumberReverse(reversibleNumber);
    console.log('The reversed float number is:' + reversedFolatNumber);
}


function numberReverse(reversibleNumber, maxLen) {

    for (len = 0; len< maxLen; len+=1){
        arr[len] = (reversibleNumber.charAt(len))|0;
    }
    arr.reverse();
    return arr.join('');
}


function floatNumberReverse(reversibleNumber) {
    var i = reversibleNumber.length;
    for (len = 0; len< i; len+=1){
        if(reversibleNumber.charAt(len) !== '.'){
            arr[len] = (reversibleNumber.charAt(len))|0;
        }
        else {
            arr[len] = '.';
        }
    }
    arr.reverse();
    return arr.join('');
}


