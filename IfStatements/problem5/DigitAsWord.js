do
{
    var digit = prompt('Dear user, please input the desired digit:', 'example: 0...9') ; // get data from the user
    if(digit>=0 && digit<=9)
    {
        break;
    }
    else {
        console.log('Dear user, this is not a digit, but a number... Please try again.');
    }
}
while (1);

digit=digit|0; //we do not need the floating point here

switch (digit){
    case 1: console.log('one');
        break;
    case 2: console.log('two');
        break;
    case 3: console.log('three');
        break;
    case 4: console.log('four');
        break;
    case 5: console.log('five');
        break;
    case 6: console.log('six');
        break;
    case 7: console.log('seven');
        break;
    case 8: console.log('eight');
        break;
    case 9: console.log('nine');
        break;
    
}

