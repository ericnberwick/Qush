//1,1,2,3,5,8,13,21,34,55,89,144 , ...
/*

Sum the first 100 even numbers in the fibonacci sequence

*/
function sumFib(){
    let m = 1; // f(0) = 0 
    let n = 1; // f(1) = 1
    
    let sumOfEven= 0;
    let count = 0;
    let t;
    while( count < 100) {
        t = n + m;
        // check if even
        if (t % 2 == 0) {
            sumOfEven = sumOfEven + t;
            count++;
        }
        n = m;
        m = t;
    }
    console.log(sumOfEven)
}
sumFib();