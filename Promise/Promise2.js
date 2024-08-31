const getData = ()=>{

    var age = 16;
    var promise = new Promise((success,failure)=>{

        setTimeout(()=>{
            age>18?success("Your ticket confirmed"):failure("your ticket rejected")
        },4000)
        
    })

    return promise
}

var promise = getData()

// promise.then((data)=>{
//     console.log("Ticket message : ",data);
    
// })
// promise.catch((error)=>{
//     console.log("Error : ",error);
// })

promise.then((data)=>{
    console.log("ticket message : ",data);
    
}).catch((error)=>{
    console.log("Error : ",error);
})

console.log("Ending fetching ticket");
