const sendEmail = ()=>{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    const params = {
        name:name,
        email:email,
        message:message
    }

    const serviceId = "service_vx89skf";
    const templateId = "template_qgmmaae";

    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}