var N,
    count,
    print,
    divisibleByThree,
    divisibleBySeven;
N = prompt('Dear user, please input the desired number N: ');
N=N|0; //cast to string, cut out the floating point;
for(count=1; count <=N; count+=1){
    divisibleByThree=!(count%3); // to make sure it divides by three;
    divisibleBySeven = !(count%7); // to make sure it divides by seven
    if(divisibleByThree && divisibleBySeven)
    {
        print = count;
        console.log('This number IS divisible by both 3 and 7: '+ print + '.');

    }else {
        print = count;
        console.log('This number is NOT divisible by both 3 and 7: '+ print + '.');
    }

}
