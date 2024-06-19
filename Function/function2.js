function goa(amt){


    return "we are going to goa " + amt  + " rupees."
}

function lasvegas(amt){

    console.log("We are going to lasvegas " + amt+" rupess");
}

function bangkok(amt){

    return "we are going to bangkok " + amt+ "rupees.."
}

var budget = prompt("Enter your budget for tour");

if(budget > 4000){

    lasvegas(budget)

}
else if(budget > 2500){
    var x = bangkok(budget)
    console.log(x);
}
else if(budget > 1500){
    var x = goa(budget)
    console.log(x);
}
else{
    console.log("You need more money....");
}