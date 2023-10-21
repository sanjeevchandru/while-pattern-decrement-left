document.write(" print a pattern decrement of left using while loop "+"<br>");
document.write("-------------------------"+"<br>");
let n=parseInt(prompt("Enter a number:"));
let i=n;
while(i>=1){
    let j=i;
    while(j>=1){
        document.write("*");
        j--;
    }
    i--;
    document.write("<br>")
}
