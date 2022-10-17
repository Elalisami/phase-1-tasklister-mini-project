document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const form= document.querySelector("form")
 const addTask= document.querySelector("#tasks")
 
 form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
 const newTask=document.createElement("li")
 newTask.innerText=e.target[0].value;
 const removeBtn= document.createElement("button");
 removeBtn.innerHTML="remove"
 removeBtn.addEventListener("click", deleteTask) 
 newTask.appendChild(removeBtn);
 addTask.appendChild(newTask);
 })
});

function deleteTask(e){
  console.log("Hello")
  e.preventDefault();
  e.currentTarget.parentElement.remove();
}

