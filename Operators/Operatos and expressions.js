// solve if the third digit of a number is equal to seven for ex 701 - true; 1745 true; 673 - false ...
var dec= prompt("Please input the desired value here: "); // initial input
// function validateDec() {
// do {
//     if (typeof (dec)=== 'string'){ // ako e string
//     if ((dec=dec|0) !== 0){
//         break;
//     }
//     else {
//         alert('You have typed in a wrong number! Please try again');
//         dec= prompt('Please input the desired value here: ', 'example: 10, 0xabc...'); //input after error
//     }
//     }
// }
// while ((dec=dec|0) !== 0); // logika: pravi tova dokato tipa ne stane number ot  sting
//     return dec.toString();

//}
//dec = validateDec();
function getlength(dec) { // vizhdame kolko e dalgo
    return dec.length; // vrashtame rezultat
}
var checkNumLength=getlength(dec);
var checkNum;
if (checkNumLength===3)
{
    checkNum=dec[0];
    verifyCheckNum();
}
else if (checkNumLength>3)
{
    checkNum = dec[-(3-checkNumLength)]; // za da e vinagi tretoto chislo
    verifyCheckNum();
}
function verifyCheckNum() { //proverka dali tretoto chislo e 7
    if ((checkNum|0) ===7){
            alert("yay it is a 7. :) ");
        console.log('true');
    }
    else {
        alert("you entered a number, whose third digit is not equal to 7.");
        console.log('flase');
    }
}

