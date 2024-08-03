
var emails = [
    "aashiq@gmail.com",
    "dhwanit@gmail.com",
    "aditya@gmail.com",
    "akash@gmail.com",
    "amit@gmail.com",
    "anil@gmail.com",
    "ashutosh@gmail.com",
]
function handlerSubmit(event){
    event.preventDefault(); // prevent default default submit
    // alert("Form submitted")
    
    console.log("Form submitted");

    var name = document.getElementById("name");
    var email = document.getElementById("email");

    var output = document.getElementById("output");
    var nameErr = document.getElementById("nameErr");
    var emailErr = document.getElementById("emailErr");
    
    // console.log(name.value);
    // console.log(email.value);

    if(name.value.length < 4){
        nameErr.innerHTML = "*name is too short"
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = "";
    }


        if(emails.includes(email.value)){
            emailErr.innerHTML = "*email already exists"
            emailErr.style.color = "red"
            return;
        }
        else{
            emailErr.innerHTML = "";
            emails.push(email.value)
        }


    var users = {
        name:name.value,
        email:email.value
    }

    console.log(users);

    output.innerHTML = JSON.stringify(users);
    
    console.log(JSON.stringify(output)[0]);
    
    
}