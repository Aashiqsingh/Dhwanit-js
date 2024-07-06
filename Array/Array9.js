var language = ["hindi","english","french","german","hungarian","gujarati"];


var langname = "german";

const deleteLang = (langname)=>{

    language = language.filter((lang)=>{
        return lang != langname;
    })

    return language
}


var x = deleteLang(langname)
console.log(x);