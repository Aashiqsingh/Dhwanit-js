const BCA = (data)=>{

    return ({
        name:data.name,
        age:data.age,
        address:data.address,
        email:data.email,
        course:"BCA"
    })

}

const BBA = (data)=>{

    // return ({
    //     name:data.name,
    //     age:data.age,
    //     address:data.address,
    //     email:data.email,
    //     course:"BBA"
    // })
    return data
}

const BCom = (data)=>{

    return ({
        name:data.name,
        age:data.age,
        address:data.address,
        email:data.email,
        course:"BCom"
    })

}


var call = "BBA"
var data = {
    name:"rahul",
    age:30,
    address:"delhi",
    email:"rahul@gmail.com",
}

if(call === "BCA"){

    var x = BCA(data)
    console.log(x);
}
else if(call === "BBA"){
    var x = BBA(data)
    console.log(x.name);
}
else if(call === "BCom"){
    var x = BCom(data)
    console.log(x);
}


console.log("Log function called ",data);
console.info("info function called",data)

