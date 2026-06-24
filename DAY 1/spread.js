let human1= ["karan", 22, true];
let human2 = ["shruthi", 25 , true];

let humans = [...human1, ...human2];
console.log(humans);

let human3 =["hubbysan" , 23, true];
if (human3[2])
{
    humans.push(...human3);
}
console.log(humans);



let arr= ["karan","shruthi"]

let obj =
{
    ...arr,
    car: "Kia"
}
console.log(obj);