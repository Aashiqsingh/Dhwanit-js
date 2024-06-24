function science(name ){

    console.log(name +" your addmission is confirmed in science with percent ");
}

function commerce(name){
    console.log(name +" your addmission is confirmed in commerce with percent ");
}

function arts(name){
    console.log(name +" your addmission is confirmed in arts with percent ");
}

// cb - stands for callback 
function addmission(cb , name){

    cb(name)
}

var percentage = 76

if(percentage >= 80){
    addmission(science,"Rahul")
}

else if(percentage >= 70){
    addmission(commerce,"Rahul")
}

else if(percentage >= 60){
    addmission(arts,"Rahul")
}   

else{
    console.log("You are not eligible for admission")
}