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

        idTd.innerHTML = response.data[i]._id;
        nameTd.innerHTML = response.data[i].name;
        emailTd.innerHTML = response.data[i].email;
        ageTd.innerHTML = response.data[i].age;
        isActiveTd.innerHTML = response.data[i].isActive


        output.appendChild(tr);
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(ageTd);
        tr.appendChild(isActiveTd);


    }

















    // for(let i=0;i<response.data.length;i++){
    //     console.log(response.data[i]);
        
    // }
    
    
    
}

