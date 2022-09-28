//Write a function in a language of your choice which, when passed a positive integer returns
//true if the decimal representation of that integer contains no odd digits and otherwise returns
//false.

function getResult(n)
{
     
    // Converting integer to String
    var st = n.toString();
    // Looping  till length of String
    for(var i = 0; i < st.length; i++)
    {
        if ((st.charAt(i) % 2) != 0)
         
            return false
        
    }
    return true;

}

var n = 77788;
console.log(getResult(n))