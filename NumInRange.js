function NumRange(from,to)
{
    return from >=50 && from <=99 || to >=50 && to <=99
}

//Test-1
range1=NumRange(30,89);
console.log(range1);


//Test-2
range1=NumRange(30,100);
console.log(range1);

//Test-3
range1=NumRange(60,100);
console.log(range1);