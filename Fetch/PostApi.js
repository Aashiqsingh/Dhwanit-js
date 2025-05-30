const postData = async()=>{


    var user = {
        name:"dhwanit",
        email:"dhwanit@gmail.com",
        age:23,
        isActive:true,
    }

    const response = await fetch("https://node5.onrender.com/user/user/",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //     name:"dhwanit",
        //     email:"dhwanit@gmail.com",
        //     age:18,
        //     isActive:true,
        // })


        body: JSON.stringify(user)
    })


    const res = await response.json();
    console.log(res);

    if(response.status)
    {
        alert("Data Posted Successfully");
    }
    else{
        alert("Failed to Post Data");
    }
    
    
    // console.log(response);
    
}