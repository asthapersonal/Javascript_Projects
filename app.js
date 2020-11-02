const todoInput  =document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")       ;

//event listeners
todoButton.addEventListener('click', addTodo);
todolist.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);



function addTodo(event){
    //prevent  form from submitting
    event.preventDefault();


const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

 //create LI

 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);

 //Check mark button
 const completedButton  = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn") ;
  todoDiv.appendChild(completedButton) ;
  
 const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class =  "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todolist.appendChild(todoDiv);
  //clear todo input value
  todoInput.value="";

}
 function deleteCheck(e){
     const item = e.target;

     if(item.classList[0] === "trash-btn") {
         const todo = item.parentElement;
         todo.classList.add("fall");
         todo.addEventListener('transitionend',function(){
             todo.remove();

         });


     }
  if (item.classList[0] === "complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle('completed');
  }
 }
 function filterTodo(e){
     const todos = todolist.childNodes;
    todos.forEach(function(todo){
  switch (e.target.value){
      case "all":
    todo.style.display = "flex";
      break ; 
      case "completed":
          if(todo.classList.contains("completed")){
             todo.style.display = "flex";

          }else{
              todo.style.display = "none";

        } break;

        case "uncompleted":
            if (!todo.classList.contains("completed")){
                todo.style.display = "flex";
            
            }  else {
            todo.style.display = "none";
      }
    break;
     }
    });
 }

 function saveLcoalTodos(todo){
     
    //check Do i already have things locally ?
    let todos;
 }
