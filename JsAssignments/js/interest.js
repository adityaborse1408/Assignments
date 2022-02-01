function simple_interest()
{
var p,t,r,ci;
p = document.getElementById ("principal").value;
t = document.getElementById ("time").value;
r = document.getElementById ("rate").value;
amount = p*Math.pow((1 +r/100),t );
ci = amount-p;
document.getElementById ('num1').innerHTML ="Compound interest : "+ci;
}