const jpgHandler = (Option)=>{
    return Option.name +" File type and its size is " + Option.size;
}

const pngHandler = (Option)=>{
    return Option.name +" File type and its size is " + Option.size;
}

const gifHandler = (Option)=>{
    return Option.name +" File type and its size is " + Option.size;
}

const fileProcessor = (fname , cb)=>{
    var x = cb({name:fname , size:"3000kb"})
    console.log(x);
}

var filename = "abc.gif";
if(filename.endsWith(".jpg")){
    fileProcessor(filename, jpgHandler);
}
else if(filename.endsWith(".png")){
    fileProcessor(filename, pngHandler);
}
else if(filename.endsWith(".gif")){
    fileProcessor(filename, gifHandler);
}