var users = ["ram","shyam","geeta","seeta","rahul","priyamaa","zaarti","mayuri"]



// var flag = false;
// for(let i=0;i<users.length;i++)
//     {
//         if(users[i].length > 4){
//             flag = true;
//             break;
//         }

//     }

//     console.log(flag);


// users[i]

var x = users.some((u)=>{
    return u.length > 7;
})
console.log(x);

var x = users.some((user)=> user.startsWith("z"))
console.log(x);