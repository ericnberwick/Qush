// Write a function in a language of your choice which, when passed a decimal digit X, returns the
// value of X+XX+XXX+XXXX. E.g. if the supplied digit is 3 it should return 3702
// (3+33+333+3333).


function sumstuff(x){
    let one = x;
    let two = parseInt('' + x + x);
    let three = parseInt('' + x + x + x);
    let four = parseInt('' + x + x + x + x);
    return one + two + three + four;
}
console.log(sumstuff(3))
