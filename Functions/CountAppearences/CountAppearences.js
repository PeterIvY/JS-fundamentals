

var i,
    j,
    k,
    appearences = 0,
    appearances2=0,
    numbersArray = [],
    numbersArray2 = [],
    searchedNumber=prompt('Dear user, please select the number yyou wish to check: ', 'Hint: range is from 0 to 110.');
    searchedNumber=searchedNumber|0;
                        // let's generate some rand numbers from 0 to 110

function generateRandom() {
    for (i=0; i<250; i+=1){
        numbersArray[i]=(Math.random()*110)|0;
        numbersArray2[i]=(Math.random()*110)|0;
    }
}
generateRandom();
function countAppearences() {
    for (j in numbersArray){
        if(numbersArray[j]===searchedNumber){
            appearences +=1;
        }
    }
}
function testCountAppearances() {
    for (k in numbersArray2){
        if(numbersArray2[k]===searchedNumber){
            appearances2 +=1;
        }
    }
    if (appearences===appearences){
        document.getElementById('input').innerHTML = numbersArray.join(',');
        document.getElementById('output').innerHTML = appearences.toString();
    }
}
countAppearences();         // LOGIC: Get going with count appearences --> get the number
testCountAppearances();      // then call the test function and if it is true, then print some results. else do not.  