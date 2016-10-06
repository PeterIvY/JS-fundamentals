var a = prompt('Dear user, please input the a coefficient: ') ; // get data from the user
var b = prompt('Dear user, please input the b coefficient: ') ; // get some more data from the user
var c = prompt('Dear user, please input the c coefficient: ') ; // get some more data from the user
a=a*1; // convert to numbers
b=b*1;
c=c*1;

function calculateRoots(D,a,b) {
    var x1;
    var x2;

    if (D > 0)
    {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return 'The roots are: x1 = ' + x1 + 'and x2 = ' + x2
    }

    else if(D===0)
    {
        x1 = x2 = (-b) / (2 * a);
        return 'The roots are equal, so the root is double and its\' value is equal to: ' + x1
    }
    else
    {
        return 'Dear user, this equation has no real roots'
    }
}

function calculateD(a,b,c) {
    return Math.pow(b,2)-4*a*c;
}
var D = calculateD(a,b,c);
var returnString = calculateRoots(D,a,b); // call the function and see what happens...
alert('Your answer is: ' + returnString + '.');

