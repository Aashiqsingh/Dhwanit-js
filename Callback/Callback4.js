const pdfHandler = (Option)=>{
    console.log(Option + " type of file");
}

const wordHandler = (Option)=>{
    console.log(Option + " type of file");
}

const excelHandler = (Option)=>{
    console.log(Option + " type of file");
}

const Handler = (Fname , cb)=>{
    cb(Fname);
}

var FileName = "abc.word";

if(FileName.endsWith(".pdf")){
    Handler(FileName , pdfHandler)
}
else if(FileName.endsWith(".word")){
    Handler(FileName , wordHandler)
}
else if(FileName.endsWith(".excel")){
    Handler(FileName , excelHandler)
}