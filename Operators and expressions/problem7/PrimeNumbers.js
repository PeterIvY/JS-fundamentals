// let's get the user's number
var number = prompt('Dear user, please input your number here: ');
number=number|0;
if (!(number%1 && number%number)){
    if(number%2 === 0)
    {
        alert('Dear user, this number is not prime.');
    }
    else if(number%3 === 0)
    {
        alert('Dear user, this number is not prime.');
    }
    else
    {
        alert('Dear user, this number is prime');
    }

}
