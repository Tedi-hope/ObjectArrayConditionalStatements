var numarray=[];

function addNums()
{
    var inp=document.getElementById('itm').value;
    if(inp){
        numarray.push(inp);
        document.getElementById('itm').value='';
    }
}

function displayNums()
{
    var out='';
    numarray.forEach((item,index)=>{
    out=out+'Element'+''+index+'='+item+'<br>';
    });

    document.getElementById('outhere').innerHTML=out;
}
