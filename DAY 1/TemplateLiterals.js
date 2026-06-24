function human(...arr)
{
    console.log(`my  name is ${arr[0]} my age is ${arr[1]}`);
    return function talk()
    {
        console.log(`${arr[0]} can talk`);
        return function walk()
        {
            console.log(`${arr[0]} can walk`);
            
        }
    }
}


human("karan",22)()();
