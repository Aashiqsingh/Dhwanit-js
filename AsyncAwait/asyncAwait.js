// function getData(){

//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data fetched successfully....")
//             // reject("Error fetching data....")
//         },3000)
//     })
//     return promise
// }

// var promise = getData()
// promise.then((data)=>{
//     console.log(data);
    
// })


// promise.catch((err)=>{
//     console.log(err);
    
// })


function getData(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            resolve("Data get successfully....")
            // reject("Error getting data");

        },4000)
        
    })

    return promise
}

async function get(){
    var promise = await getData();
    console.log(promise);

    
    console.log("Ending fetching data....");
    
    
}

get()
