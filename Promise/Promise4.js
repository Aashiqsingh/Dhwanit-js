const getdata = ()=>{

    return promise = new Promise((accept,reject)=>{
        setTimeout(()=>{
            // accept({message:"Data fetched successfully"})
            reject("Error fetching data")
        },3000)
    })

    
}


getdata().then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})





// var x = getdata()
// x.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

