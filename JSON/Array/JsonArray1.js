var students = [
    {
        id:1,
        name:"dhwanit garg",
        age:20,
        country:"India"
    },
    {
        id:2,
        name:"Meet desai",
        age:21,
        country:"CANADA"
    },
    {
        id:3,
        name:"Rahul gandhi",
        age:22,
        country:"INDIA"
    }
]


console.log(students);

// for(let i=0;i<students.length;i++){

//     console.log(students[i]);
// }


// students.forEach((stu)=>{

//     console.log(stu.name);
// })


// students = students.map((stu)=>{

//     return stu.name
// })
// console.log(students);


var newStudents = students.map((stu)=>{


    return({
        id:stu.id,
        name:stu.name.toUpperCase(),
        age:stu.age,
        country:stu.country,
        isAlive: true
    })
})

console.log(newStudents);