const examGenrator = ()=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                message:"Exam is generated",
                examId:123456
            })
        },3000)
    })
}

const questionGenrator = (file)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            // resolve({
            //     message:"Questions are generated",
            //     questionsId:file.examId
            // })
            reject("Error generating questions")
        },4000)
    })
}



const answerGenrator = async()=>{


    console.log("exam is about to be generated....");
    


    let exam = await examGenrator();
    console.log("exam is generated = ",exam);

    console.log("question is about to be generated....");
    
    let question = await questionGenrator(exam);
    console.log("question is generated = ",question);

}


answerGenrator()






// var answer = examGenrator()
// answer.then((data)=>{

//     console.log("exam is generated = ",data);
//     let question = questionGenrator(data);
//     question.then((answer)=>{
//         console.log("question is generated = ",answer);
        
//     }).catch((error)=>{
//         console.log("error",error);
        
//     })
    
// }).catch((err)=>{
//     console.log("Failed to generate exam");
    
// })