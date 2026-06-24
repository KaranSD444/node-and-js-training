let ages = [20, 21, 12 , 52, 1];
let len = ages.length;
let ages1=[];
try 
{

    for(let i = 0 ; i <= len ;i++)
    {
        ages1[i] = ages[i]/0; 
        console.log(ages1);
        len = len -2;

    }
}
catch(err)
{
    console.log(err);
    
}