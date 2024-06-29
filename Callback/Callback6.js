const jpgHandler = (Option)=>{
    return Option.name +" File type and its size is " + Option.size;
}

const pngHandler = (Option)=>{
    return Option.name +" File type and its size is " + Option.size;
}

const gifHandler = (Option)=>{
    return Option.name +" File type and its size is " + Option.size;
}

// const fileProcessor = (fname , cb)=>{
//     return cb({name:fname,size:"2000kb"})
// }

const fileProcessor = (fname,cb)=> cb({name:fname,size:"3000kb"})

var filename = "abc.gif";
var temp;
if(filename.endsWith(".jpg")){
    temp = fileProcessor(filename, jpgHandler);
}
else if(filename.endsWith(".png")){
    temp = fileProcessor(filename, pngHandler);
}
else if(filename.endsWith(".gif")){
    temp = fileProcessor(filename, gifHandler);
}

console.log(temp);