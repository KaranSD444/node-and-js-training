function eating(callback)
{
    console.log("Eating");
    callback();
    
}


function sleep()
{
    console.log("Sleeping");
    
}

eating(sleep);