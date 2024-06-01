// var age = 18;


// if(age >= 18){
//     alert("You are eligible for vote")
//     console.log("You are eligible for vote");
// }
// else{
//     console.log("You are not eligible for vote");
//     }


var isAlive = true
var age = 61;
var isChild = true


if(isAlive === true){
    console.log("you are alive");
    if(age > 60){
        console.log("you are old");
        if(isChild === true){
            console.log("you have a child")
        }
        else{
            console.log("you have not a child")
        }
    }
    else if(age > 18){
        console.log("you are adult");
    }
    else{
        console.log("you are kids.");
    }
}
else{
    console.log("you are dead");
    }