const getData = async()=>{


    var res = await fetch("https://node5.onrender.com/user/user/",{
        method:"GET"
    })

    // console.log(res);

    var response = await res.json();
    // console.log(response.data);
    // console.log(response.data);

    var output = document.getElementById("output");

    for(let i=0;i<response.data.length;i++){

        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let isActiveTd = document.createElement("td");
        let deleteTd = document.createElement("td");
        let deletebtn = document.createElement("button");

        idTd.innerHTML = response.data[i]._id;
        nameTd.innerHTML = response.data[i].name;
        emailTd.innerHTML = response.data[i].email;
        ageTd.innerHTML = response.data[i].age;
        isActiveTd.innerHTML = response.data[i].isActive
        deletebtn.innerHTML = "Delete";
        deletebtn.setAttribute("class","btn btn-danger")
        deletebtn.addEventListener("click",async()=>{
            // alert("Data deleted successfully..." + response.data[i].name);

            const res1 =await fetch("https://node5.onrender.com/user/user/"+response.data[i]._id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
                // body:JSON.stringify({_id:response.data[i]._id})
            })

            console.log(res1);
            

            // var response1 = await res1.json();
            // console.log(response1.data);
            

            if(res1.status === 204){
                alert("Data deleted successfully..")
            }
            else{
                alert("Failed to delete data...")
            }
        })



        output.appendChild(tr);
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(ageTd);
        tr.appendChild(isActiveTd);
        tr.appendChild(deleteTd);
        deleteTd.appendChild(deletebtn);


    }

















    // for(let i=0;i<response.data.length;i++){
    //     console.log(response.data[i]);
        
    // }
    
    
    
}

