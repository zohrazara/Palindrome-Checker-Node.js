let exportedMethods = {
    palindromeCalculations(input)
    {
        if(typeof(input) !=="string" )
        {
            throw "Please give an Input in string format"
        }
        else
        {
         let input1 = input.toLowerCase();
         input1 = input1.replace(/[^a-z0-9]/g, "");
         var input2 = input1.split('').reverse().join('');
         let var1 = "Palindrome";
         let var2 = "This ain't a Palindrome";
         return input1 === input2 ? var1: var2
        }
    }
}
module.exports = exportedMethods;