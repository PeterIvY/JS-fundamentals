var caseProp = prompt('dear user, please input the property you would like to check: ',
    'only document, window and navigator inputs are allowed...');

var prop1 = [];
var prop2 = [];
var prop3 = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var p, // last/current property of  document
    q, // last/current property of  window
    r, // last/current property of  navigator
    count1, // counters....
    count2,// counters....
    count3,// counters....
    a,// counters....
    b,// counters....
    d,// counters....
    e,// counters....
    f;// counters....
// initialize some counters....
count1=0;
count2=0;
count3=0;
//get the properties
if (caseProp==='document'){
    for (p in document) {       // take properties
        prop1[count1]=p;
        count1+=1;
    }
    d=0;
    e=prop1.length-1;
    for (d;d<=e;d+=1)
    {
        arr1[d]=prop1[d].length;        // convert to numbers
    }

    orderedArr=bubbleSort(arr1);        // do the bubble sort
    a=0;
    do{
        if (orderedArr[0]===orderedArr[a]){   // check how many properties have equal lengths
            arr2[a] = orderedArr[a+1]; // because we are not using it currently it will store the info for us
            a+=1;
        }
        else{
            break;
        }
    }
    while (1);
    if (arr2.length>1)
    {
        alert('Dear user, there are ' + arr2.length +' properties in the document object you looked up and they all have length of: '+ arr2[0]);
    } else {
        alert('Dear user, there is one single property you looked for and it has length of: ' + arr2[0]);
    }


} else if (caseProp==='window'){
    for (q in window) {
    prop2[count2]=q;
    count2+=1;
    }
    e=0;
    f=prop2.length-1;
    for (e;e<=f;e+=1)
    {
        arr2[e]=prop2[e].length;
    }

    orderedArr=bubbleSort(arr2);
    a=0;
    do{
        if (orderedArr[0]===orderedArr[a]){   // check how many properties have equal lengths
            arr3[a] = orderedArr[a+1]; // because we are not using it currently it will store the info for us
            a+=1;
        }
        else{
            break;
        }
    }
    while (1);
    if (arr3.length>1)
    {
        alert('Dear user, there are ' + arr3.length +' properties in the document object you looked up and they all have length of: '+ arr3[0]);
    } else {
        alert('Dear user, there is one single property you looked for and it has length of: ' + arr3[0]);
    }

} else if(caseProp==='navigator') {
    for (r in navigator) {

        prop3[count3]=r;
        count3+=1;
    }
    f=0;
    e=prop3.length-1;
    for (f;f<=e;f+=1)
    {
        arr3[f]=prop3[f].length;
    }

    orderedArr=bubbleSort(arr3);
    a=0;
    do{
        if (orderedArr[0]===orderedArr[a]){   // check how many properties have equal lengths
            arr1[a] = orderedArr[a+1]; // because we are not using it currently it will store the info for us
            a+=1;
        }
        else{
            break;
        }
    }
    while (1);
    if (arr1.length>1)
    {
        alert('Dear user, there are ' + arr1.length +' properties in the document object you looked up and they all have length of: '+ arr1[0]);
    } else {
        alert('Dear user, there is one single property you looked for and it has length of: ' + arr1[0]);
    }

} else {
    alert ('You did not input anything correct. Program needs F5 to reset.');
}


function bubbleSort(theArray) { // just bubble sort that hing! 
    a = theArray.length - 1;
    for (a; a >= 0; a-= 1){
        for (b = 0; b <a; b++) {
            if (theArray[b + 1] < theArray[b]) {
                temp = theArray[b];
                theArray[b] = theArray[b + 1];
                theArray[b + 1] = temp;
            }
        }
    }
    return theArray; // should contain lengths only!! NO STRINGS!!! 
}