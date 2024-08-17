var students = [
    {
        id:1,
        name:"dhwanit",
        email:"dhwanit@gmail.com",
        age:18,
        gender:"male"
    },
    {
        id:2,
        name:"saloni",
        email:"saloni@gmail.com",
        age:17,
        gender:"female"
    },
    {
        id:3,
        name:"priya",
        email:"priya@gmail.com",
        age:19,
        gender:"female"
    },
    {
        id:4,
        name:"anil",
        email:"anil@gmail.com",
        age:20,
        gender:"male"
    }
]

var tbody = document.getElementById("tbody")

var btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

    students.forEach((stu)=>{
        var tr = document.createElement("tr")
        var tdId = document.createElement("td")
        var tdName = document.createElement("td")
        var tdEmail = document.createElement("td")
        var tdAge = document.createElement("td")
        var tdgender = document.createElement("td")

        tdId.innerHTML = stu.id
        tdName.innerHTML = stu.name
        tdEmail.innerHTML = stu.email
        tdAge.innerHTML = stu.age
        tdgender.innerHTML = stu.gender


        tbody.appendChild(tr)
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdAge)
        tr.appendChild(tdgender)
    })

})