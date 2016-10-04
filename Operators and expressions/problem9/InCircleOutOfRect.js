var x = prompt('Dear user, please input the X coordinate of your point to check: ');
var y = prompt('Dear user, please input the Y coordinate of your point to check: ');
x=x*1;
y=y*1;
var radius = 3;
var xCenter=1;
var yCenter=1;
alert('Your selected point is P('+x+','+y+') and the radius is set to: ' + radius +'.');

//the 'tough way with mathematics theorems'
function isWithinCircle() {
    if (Math.pow((x-xCenter),2) + Math.pow ((y-yCenter),2) < Math.pow(radius,2))
// neg. numbers do not matter here, since it is all squared.
    {
        alert('Dear User, your point (P) is within the circle with radius:' + radius +'.');
        console.log(true + ' within');
        return true;
    }
    else if (Math.pow((x-xCenter),2) + Math.pow ((y-yCenter),2) === Math.pow(radius,2)){
        alert('Dear User, your point (P) is exactly on the edge of the circle with radius:' + radius +'.')
        console.log(true + ' on the edge');
        return true;
    }
    else {
        alert('Dear User, your point (P) is outside of the circle with radius:' + radius +'.')
        console.log(false + ' outside');
        return false;
    }
}
var isInCircle=isWithinCircle();
function isOutsideRect() {
    if ((y>=0 && y<=2) && (x+=-1&&x<=3.83))
    {
        alert('Dear user, you are within the rectangle!');
        return false;
    }
    else{
        alert('Dear user, you are outside the rectangle');
        return true;

    }
    // is it outside the rect - returns true if itIS OUTSIDE THE RECT and vice versa

}
var isoutsideRect = isOutsideRect();

if(isInCircle && isoutsideRect) {
    alert('The selected point is within the circle and without the rectangle.'); // this is what we need!!!
}
else if (isInCircle){
    if(isoutsideRect===false){
        alert('this point is within the circle and within the rectangle!');
    }
}
else if (isoutsideRect === false)
{
    if(isInCircle===false){
        alert('This point is within the rectangle and without the circle.');
    }
}