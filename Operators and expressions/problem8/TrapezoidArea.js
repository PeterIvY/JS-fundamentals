var a = prompt('Please input the desired length of the base a: ');
var b = prompt('Please input the desired length of the base b: ');
var h = prompt('Please input the desired height of the trapezoid h: ');
a=a*1;
b=b*1;
h=h*1;
function calculateArea() {
    return  ((a+b)/(2))*(h);
}
var trapArea = calculateArea();
alert('The area of the trapezoid with base a ' + a + ' cm' +
    ', base b ' + b + ' cm and height '+ h +' is: ' + trapArea + ' cm^2.');
