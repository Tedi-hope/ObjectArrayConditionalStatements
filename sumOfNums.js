function SumNums(num1,num2)
{
    sum=0;
    if (num1==num2)
    {
        sum=3*(num1+num2);
    }
    else{
        sum=num1+num2;
    }
    return sum;
}

//call function

//Test-1
var n1=5;
var n2=5;
var rst1=SumNums(n1,n2);
console.log(rst1);

//Test-2
var n3=9;
var n4=4;
var rst2=SumNums(n3,n4);
console.log(rst2);

//Test-3
var n5=-1;
var n6=0;
var rst2=SumNums(n5,n6);
console.log(rst2);