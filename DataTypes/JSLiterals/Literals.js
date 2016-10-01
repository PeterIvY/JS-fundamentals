var ageFactor = 7; // this is a number type. It can save all: decimal, float, positive, negative - just numbers!
var name = 'Pesho'; // this is a string type. It can save all texts within - digits, symbols, all!
var check = true; // boolean -> serves for true and flase only.
var age = 23;
var hair_color = 'black';
function Human(name, age,hair_color){       //THIS IS CONSTRUCTOR FUNCTION!!!
    this.name=name;
    this.age=age;
    this.hair_color=hair_color;

}

var Pesho = new Human (name, age, hair_color);
console.log('hello' + Pesho.name + ' is must be nice to be ' + Pesho.age + ' years old and to have ' + Pesho.hair_color + ' hair...');

var unUsable = undefined;
var nullVar = null;
console.log('Welcome to JS! Here everything is kind of ' + unUsable + '.');
console.log ('And somethimes it is simply ' + nullVar + '.');
var lupus = "\'Homo homini lupus!\'";
var inSoManyCases = 99.99999999;
console.log ('The proverb ' + lupus + ' is ' + check + ' in ' + inSoManyCases + ' percent of all the cases.');

function setValue() {
    var theSet;
    theSet=((age*ageFactor)-(ageFactor*0.785458))/(325+age-(17.28*15));
    if (theSet<=2)
    {
        theSet='Under 2 ?!? I am not printing this!!';
    }
    return theSet;

}
var printSetValue=setValue();
console.log('The function setValue returns the following result: ' + printSetValue);

var a=0.1+0.2; // this variable is for 0.3===0.3 test.
var b = 0.3; // this variable is for 0.3===0.3 test.
console.log('Is a equal to b?', Math.abs(a-b)<0.0000001); // with math.abs we get the abs of the diff of two numbers

var stringSlash = name/hair_color;
if (isNaN(stringSlash)){
    console.log('Sorry, these strings are not convertible to numbers, so the result is: ' + name + '/' + hair_color+'.');
}
