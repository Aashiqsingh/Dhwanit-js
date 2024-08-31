const getDate = ()=>{

    var p1 = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Data fetched successfully....")
            // reject("Error fetching data....")
        },3000)
    })

    console.log(p1);
    




    p1.then((data)=>{
        console.log(data);

        console.log("data coming...");
        
    })
    p1.catch((err)=>{
        console.log(err);
        
    })

}

getDate()