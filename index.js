let students=[
    { name:"Ramya" ,age: 21},
    { name:"Abhi",age:27},
    { name:"Prathyu" ,age: 31},
    { name:"Rap" ,age:19},
    
];
function displayStudents(){
    const list = document.getElementById("StudentList");
    list.innerHTML="";

    students.forEach((student,index)=>{
        let li = document.createElement("li")
        li.textContent = `${index+1}.${student.name} - age:${student.age}`;
        list.appendChild(li);

    });
}
function sortByName(){
    students.sort((a,b)=>a.name.localeCompare(b.name));
    displayStudents();
}
function sortByAge()
{
    students.sort((a,b) => a.age - b.age);
    displayStudents();
}
