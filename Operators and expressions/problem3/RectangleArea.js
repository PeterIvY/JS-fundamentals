var width = prompt('Please input the desired width: ');
var height = prompt('Please input the desired height: ');

function calculateArea() {
    return  width*height;
}
var rectArea = calculateArea();
alert('The area of a rectangle with width of ' + width + ' cm' +
    ' and height of ' + height + ' cm is: ' + rectArea + ' cm^2.');
