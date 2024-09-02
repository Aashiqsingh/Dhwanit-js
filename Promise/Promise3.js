const getdata = ()=>{

    var promise = new Promise((accept,reject)=>{
        setTimeout(()=>{
            accept({message:"Data fetched successfully"})
        },3000)
    })

    return promise
}

var x = getdata()
x.then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})