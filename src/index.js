document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const form= document.querySelector("form")
 const addTask= document.querySelector("#tasks")
 
 form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
 const newTask=document.createElement("li")
 newTask.innerText=e.target[0].value;
 addTask.appendChild(newTask);
 })
});


