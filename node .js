const id = document.getElementById("id");
const hour = document.getElementById("hour");
const submit = document.getElementById("submit");
const showSalary = document.getElementById("showSalary");
const showId = document.getElementById("showId")
const name = document.getElementById ("name");
const showName = document.getElementById("showName");

submit.addEventListener("click", function (){

 let hourRate = 125 ;

 let salary = hour.value*hourRate;

 showSalary.innerText = salary;

 showId.innerText = id.value;
 showName.innerText = name.value;

} );



