var len,
    word,
    string123,
    count,
    occurances,
    word2,
    fChar,
    printCase1,
    printCase2,
    arr,
    array2;


string123 = 'Founding Act of the Sole Owner Limited Liability ' +
    'Company, On the grounds of article 113 and in relation to article 147, ' +
    'paragraph 2 of the Trade Law, by the resolution of the sole owner of the capital BAI HUI, ' +
    'born on the i, this Founding Act /FA/ is accepted and the company will be' +
    ' managed as follows: I. GENERAL ARTICLES Article 1. The trading company,' +
    ' named herein after “the Company” is founded on the grounds of article 113 of the Trade Law ' +
    '/TL/ and shall be managed by both the prescriptions of the TL and of this FA.Article 2. The ' +
    'Company is a legal entity which is not tied to the owner of the capital. The liability of the capital ' +
    'owner cannot exceed the amount of the paid capital.II. Company, SEAT AND ADMINISTRATION ADDRESS Article ' +
    ' 3. The legal denomination of the Company shall be and shall be transliterated as follows:' +
    'Article 4. (1) The seat of the Company is located in the city of Sofia.(2) ' +
    'Tticity of this copy.Signature illegible, Date 27-09-2016, Signature illegible, Round seal of the Registry Agency';


word = prompt('Dear user please input the word you would like to search for.', 'Hint: the search returns results for both upper and lower cases.');

function splitArrays(string123) {
    arr = string123.split(' ');
    array2 = string123.split(','); // IDE pointed out initialize was redundant - THESE WILL BE ARRAYS
}


function executeSearch(word) {
    if(!(isNaN(word))){
        printCase1 = countContains(arr, word);
        alert('Dear user, you just selected a number to search and these are your results: ' + printCase1 +
            ' occurances.');

    } else {
        fChar=word.charAt(0).toUpperCase();
        word2=fChar+word.substring(1); // upper case word
        printCase1 = countContains(arr, word2); // call with upper case word
        fChar=word.charAt(0).toLowerCase();
        word2=fChar+word.substring(1); // lower case word
        printCase2 = countContains(arr, word2); // call with lower case word
        alert('The count of the desired word in upper case is: ' + printCase1 +
            ' and the count of the desired word in lower case is: '+ printCase2);
    }

}

function countContains(array, word){
    count=0;
    occurances=0;
    len=array.length-1;
    for (count; count<len; count+=1){
        if (array[count]== word){
            occurances+=1;
        }
    }
return occurances;
}

splitArrays(string123);
executeSearch(word);


