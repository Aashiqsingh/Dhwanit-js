function submitHandler(event) {
    event.preventDefault();

    var name = document.getElementById("name")
    var gender = document.getElementsByName("gender")
    var age = document.getElementById("age")

    var gen = " ";
    if (gender[0].checked === true) {
        gen = "Male";
    }
    else if (gender[1].checked === true) {
        gen = "Female";
    }
    else if (gender[2].checked === true) {
        gen = "Other";
    }


    if (gen === "Male") {
        if (age.value >= 18) {
            console.log("You are eligible for vote");
        }
        else {
            console.log("You are not eligible for vote");
        }
    }
    else if (gen === "Female") {
        if (age.value >= 22) {
            console.log("You are eligible for vote");
        }
        else {
            console.log("You are not eligible for vote");
        }
    }
    else if (gen === "Other") {
        if (age.value >= 25) {
            console.log("You are eligible for vote");
        }
        else {
            console.log("You are not eligible for vote");
        }
    }



    // console.log(name.value);

    // console.log(gen);



}