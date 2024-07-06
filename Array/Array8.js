var users = ["ramal","shyamal","geetal","seetal","rahul","priyamaal","zaartil","mayuril"]

var name = "ramal";
// function deleteUser(x){

//     var x = users.filter((user)=>{
//         return user != x;
//     })

//     return x;
// }


// var x = deleteUser(name)
// console.log(x);

// function deleteUser(x){

//     return users.filter((user)=>{
//         return user != x;
//     })
// }


// var x = deleteUser(name)
// console.log(x);

// const deleteUser = (x)=>{
//     return users.filter((user)=>{
//         return user!= x;
//     })
// }

    

const deleteUser = (x)=>users.filter((user)=> user!=x)



var x = deleteUser(name)
console.log(x);