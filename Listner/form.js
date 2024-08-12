var formSubmit = document.getElementById("formSubmit")

formSubmit.addEventListener("submit",(e)=>{

    e.preventDefault();
    console.log("form submitted...");

    var name = document.getElementById("name");
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
  

    
    console.log(name.value);
    console.log(email);
    console.log(age);   
    
    
})