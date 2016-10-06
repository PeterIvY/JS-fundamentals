var N,
    count,
    print;
N = prompt('Dear user, please input the desired number N: ');
N=N|0; //cast to string, cut out the floating point;
for(count=1; count <=N; count+=1){
    print = count;
    console.log(print);
}
