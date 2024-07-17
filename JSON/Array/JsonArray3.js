var company = [
   {
        name: "maruti",
        employees:[
            {
                id:101,
                name:"ramesh",
                salary:50000,
                email:"ramesh@gmail.com",
                isMarried:true,
                child:2,
                gender:"male",
            },
            {
                id:102,
                name:"rahul",
                salary:60000,
                email:"rahul@gmail.com",
                isMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:103,
                name:"shweta",
                salary:70000,
                email:"shweta@gmail.com",
                isMarried:true,
                child:1,
                gender:"female"
            }
        ]
   },
   {
        name:"balaji",
        employees:[
            {
                id:201,
                name: "priti",
                salary: 40000,
                email: "priti@gmail.com",
                isMarried: true,
                child:3,
                gender:"female"
            },
            {
                id:202,
                name:"suresh",
                salary:35000,
                email: "suresh@gmail.com",
                isMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:203,
                name:"pooja",
                salary: 25000,
                email: "pooja@gmail.com",
                isMarried: true,
                child:2,
                gender:"female"
            }
        ]
   }
]

var x = company.find((comp)=> comp.name ==="balaji").employees.reduce((sum,emp)=> sum += emp.salary,0)
console.log(x);

// var x = company.find((company) => company.name ==="maruti").employees.filter((emp)=> emp.child > 0)
// console.log(x);

// var x = company.find((comp)=> comp.name === "balaji").employees.filter((emp)=> emp.gender === "male")
// console.log(x);

// console.log("company ---",company);


// company.map((comp)=>{

//     console.log(comp.name);
// })

// var x = company.find((comp)=> comp.name ==="maruti").employees.filter((emp)=> emp.gender === "female")[0]
// console.log(x);


// company.forEach((comp)=>{
//     // console.log(comp.employees);
//     comp = comp.employees.filter((emp)=> emp.gender === "female")
//     console.log(comp);
// })



// let x = 4;
// const y = 2;
// result = x +y;
// console.log(result);

