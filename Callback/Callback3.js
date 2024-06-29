function Lasvegas(name , amount){

    console.log(name + " has to paid " + amount + " to go to las vegas");
}

function Singapore(name , amount){
    console.log(name + " has to paid " + amount + " to go to singapore");
}

function Tokyo(name , amount){
    console.log(name + " has to paid " + amount + " to go to tokyo");
}

function travel(fname,budget , cb){

    cb(fname,budget);
}

var budget = "5200";

if(budget > 5000){
    travel("Dhwanit", budget, Lasvegas)
}
else if(budget > 3000){
    travel("Ashutosh", budget, Singapore)   
}
else if(budget > 1000){
    travel("Bhuwan", budget, Tokyo)
}