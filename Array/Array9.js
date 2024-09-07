
// language.splice()
// console.log(language);

// console.log(typeof language);



// var x = language.every((lang)=>{
//     return lang.length > 4
// })
// console.log(x);


// var x = language.some((lang)=>{
//     return lang.length > 9
// })
// console.log(x);




// language.splice(1,1)
// language.splice(1,0,"marathi","bhojpuri")
// console.log(language);

// var x = language.slice(1,4)
// console.log(x);





// var langname = "german";

// const deleteLang = (langname)=>{

//     language = language.filter((lang)=>{
//         return lang != langname;
//     })

//     return language
// }


// var x = deleteLang(langname)
// console.log(x);
var language = ["hindi","english","french","german","hungarian","gujarati"];

const deleteLang = (langName)=>{
    var x = language.filter((lang)=>{
        return lang!== langName;
    })

    return x;
}

var x = deleteLang("english");
console.log(x);
