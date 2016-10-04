var x = prompt('Dear user, please input the X coordinate of your point to check: ');
var y = prompt('Dear user, please input the Y coordinate of your point to check: ');
x=x*1;
y=y*1;
var radius = 5;
var xCenter=0;
var yCenter=0;
alert('Your selected point is P('+x+','+y+') and the radius is set to: ' + radius +'.');

//the 'tough way with mathematics theorems'
if (Math.pow((x-xCenter),2) + Math.pow ((y-yCenter),2) < Math.pow(radius,2))
// neg. numbers do not matter here, since it is all squared.
{
    alert('Dear User, your point (P) is within the circle with radius:' + radius +'.');
    console.log(true + ' within' + '================================================'); // the ================================================ string serves for quicker recognition
}
else if (Math.pow((x-xCenter),2) + Math.pow ((y-yCenter),2) === Math.pow(radius,2)){
    alert('Dear User, your point (P) is exactly on the edge of the circle with radius:' + radius +'.')
    console.log(true + ' on the edge' + '================================================');
}
else {
    alert('Dear User, your point (P) is outside of the circle with radius:' + radius +'.')
    console.log(false + ' outside' + '================================================');
}
// end of the tough way
//simplest way ever

var dx=x-xCenter; //useless here, since hCenter = 0, so it does nothing, but hey...
var dy = y-yCenter; // same, but if it changes it will save us

// now let's do some checks
if (Math.abs(dx) < Math.abs(radius) && Math.abs(dy) < Math.abs(radius))
{ // here too - for neg. nums. :)
    console.log ('X and Y do not exceed the radius.');

    if (Math.abs(dx + dy) <= Math.abs(radius))
    {
    console.log (true + ' within');
    }

    if (Math.pow(dx,2) + Math.pow(dy,2) <= Math.pow(radius,2))
    {
        console.log (true + ' within - double checked. All coords. are right. :)');
    }
    else
    {
        console.log(false);
    }

}
else
{
    console.log(false + 'something went wrong, buddy...');
}


