const Science = (name , per)=>{

    return name + " Your addmisiion confirm in science stream with percentage "+per 

}

const commerce = (name , per)=>{

    return name + " Your addmisiion confirm in commerce stream with percentage "+per
}

const arts = (name , per)=>{

    return name + " Your addmisiion confirm in arts stream with percentage "+per
}


var username = "Aakash"
var per = 80

if(per > 90){
    var x = Science(username , per)
    console.log(x);
}
else if(per >= 80){
    var x = commerce(username , per)
    console.log(x);
}
else if(per > 50){
    var x = arts(username , per)
    console.log(x);
}