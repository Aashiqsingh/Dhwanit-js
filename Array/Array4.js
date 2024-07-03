var users = ["ramal","shyaml","geetal","seetal","rahul","priyamaal","zaartil","mayuril"]

// var flag = true;
// for(let i=0;i<users.length;i++){


//     if(users[i].length < 8){
//         flag = false;
//         break;
//     }
// }

// console.log(flag);


var x = users.every((u)=>{

    return u.length < 9;
})

console.log(x);


var x = users.every((u)=> u.endsWith("l"))
console.log(x);