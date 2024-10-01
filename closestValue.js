function closeToHund(num1 ,num2)
{
var diff1=Math.abs(num1-100);
var diff2=Math.abs(num2-100);

if(diff1 < diff2)
{
    return num1;
}
else if(diff2 < diff1)
{
    return num2;
}
else{
    return "both values are equally close to 100";
}
}

//Test
console.log(closeToHund(80,90));
console.log(closeToHund(99,101));
console.log(closeToHund(-80,-90));