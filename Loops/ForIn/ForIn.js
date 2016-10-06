// Let's try to solve this with forin

// let's have a random line of numbers

var i, // for the first loop - counter
    a, // for the bubble sort function - counter
    b, // for the bubble sort function - counter
    biggestNumber, // what is our result? _ THIS IS IT
    temp,   // Just a temp variable for the loop
    toPrintArr; // the string which will be printed instead of the array. Could have used loop, but I am way too lazy.

var numbersArray = new Array(50); // let's store them in this array with 50 slots.

for (i=0; i<50; i+=1){
    numbersArray[i]=(Math.random()*50)|0;
}

function bubbleSort(theArray) { // just bubble sort that hing! 
    a = theArray.length - 1;
    for (a; a >= 0; a-= 1){
        for (b = 0; b <= a; b++) {
            if (theArray[b + 1] < theArray[b]) {
                temp = theArray[b];
                theArray[b] = theArray[b + 1];
                theArray[b + 1] = temp;
            }
        }
    }
    return theArray;
}
biggestNumber = bubbleSort(numbersArray)[49];
toPrintArr=numbersArray.join();

console.log(toPrintArr); // this will print out the entire array...
console.log('The biggest number in the sorted array is: ' + biggestNumber); // this will show us the number ...


