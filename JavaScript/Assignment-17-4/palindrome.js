const a=""

function isPalindrome(a){
    if(a==null || a.length==0){
        // up to you if you want true or false here, don't comment saying you 
        // would put true, I put this check here because of 
        // the following i < Math.ceil(word.length/2) && i< word.length
        return 'invalid input';
    }
    var lastIndex=Math.ceil(a.length/2);
    for (var i = 0; i < lastIndex  && i< a.length; i++) {
        if (a[i] !=a[a.length-1-i]) {
            return false;
        }
     }
     return true;
} 

console.log(isPalindrome(a))