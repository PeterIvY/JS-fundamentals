var count,
    Divs,
    arr=[];
count = 0;
function countDivs() {
    Divs = document.getElementsByTagName('DIV');
    arr=[].slice.apply(Divs);
    count=arr.length;
    alert('There are this many div\'s on this web page: ' + count);

}
countDivs();


