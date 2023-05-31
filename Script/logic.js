let todoListString=null;
let todoList=null;

todoListString=localStorage.getItem('todoList')

if(!todoListString){
  todoList=[];
}
else{
  todoList=JSON.parse(todoListString);
}

let colors = null

fetch('./Script/colors.json')
.then((response) => response.json())
.then((data) => {
  colors=data;
  loadTodoCards();
});
let workTodo=[];
let personalTodo=[];
let healthTodo=[];
let schoolTodo=[];



function handleAddTodo(element){
  let task=document.querySelector(".input-task").value;
  let date=document.querySelector(".input-date").value;
  let description=document.querySelector(".input-description").value;
  let type=null;
  const typeTodo= checktType(element)
  switch(typeTodo){
    case 0:
      type='work';
      break;
    case 1:
      type='personal';
      break;
    case 2:
      type='health'
      break;
    case 3:
      type='school';
      break;
  }
 
  let todoObj={
    task,type,date,description
  }
  if(task===""){
    alert('Task can\'t be null')
    return
  }
  document.querySelector(".input-task").value='';
  document.querySelector(".input-date").value='';
  document.querySelector(".input-description").value='';
  todoList.push(todoObj)
  localStorage.setItem('todoList',JSON.stringify(todoList))
  removeOverlay();
  loadTodoCards();
}


function checktType(element){
  let typeVal=null;
  if(element.classList.contains("add-work")){
    typeVal=0;
  }
  if(element.classList.contains('add-personal')){
    typeVal=1;
  }
  if(element.classList.contains('add-health')){
    typeVal=2;
  }
  if(element.classList.contains("add-school")){
    typeVal=3;
  }
  return typeVal;
}

function checktTypeobj(obj){
  let typeVal=null;
  if(obj.type==='work'){
    typeVal=0;
  }
  if(obj.type==='personal'){
    typeVal=1;
  }
  if(obj.type==='health'){
    typeVal=2;
  }
  if(obj.type==='school'){
    typeVal=3;
  }
  return typeVal;
}

function loadTodoCards(){
  console.log(todoList);
  divideTodo();
  loadAllTodo();
  loadWorkTodo();
  loadPersonalTodo();
  loadHealthTodo();
  loadSchoolTodo();
}

function loadAllTodo(){
  const allTodoElement= document.querySelector('.all-todo');
  let stringHTML=''
  for(let i=0;i<todoList.length;i++){
    stringHTML+=`
      <div class='todo-card'>
        <div class='card-color todo-color-${todoList[i].type}'></div>
        <div class='todo-content'>
          <p class='todo-task-text'>Task:</p>
          <div class='todo-task'>${todoList[i].task}</div>
          <p class='todo-date-text'>Date:</p>
          <div class='todo-date'>${todoList[i].date}</div>
          <p class='todo-description-text'>Description:</p>
          <div class='todo-description'><span>${todoList[i].description}</span></div>
        </div>
        <button id='delete-all-todo-${i}' class='delete-todo delete-all-todo'><img src='Images/trash.png'></button>
      </div>
    `
  }
  allTodoElement.innerHTML=stringHTML

  const deleteButtonElements = document.querySelectorAll('.delete-all-todo')
  deleteButtonElements.forEach(button=>{
    button.addEventListener('click',()=>{deleteTodo(button,'all')})
  })
}

function loadWorkTodo(){
  const workTodoElement= document.querySelector('.work-all-todo');
  let stringHTML=''
  for(let i=0;i<workTodo.length;i++){
    stringHTML+=`
      <div class='todo-card'>
        <div class='card-color todo-color-${workTodo[i].type}'></div>
        <div class='todo-content'>
          <p class='todo-task-text'>Task:</p>
          <div class='todo-task'>${workTodo[i].task}</div>
          <p class='todo-date-text'>Date:</p>
          <div class='todo-date'>${workTodo[i].date}</div>
          <p class='todo-description-text'>Description:</p>
          <div class='todo-description'><span>${workTodo[i].description}</span></div>
        </div>
        <button id='delete-work-todo-${i}' class='delete-todo delete-work-todo'><img src='Images/trash.png'></button>
      </div>
    `
  }
  workTodoElement.innerHTML=stringHTML
  
  const deleteButtonElements = document.querySelectorAll('.delete-work-todo')
  deleteButtonElements.forEach(button=>{
    button.addEventListener('click',()=>{deleteTodo(button,'work')})
  })
}

function loadPersonalTodo(){
  const personalTodoElement= document.querySelector('.personal-all-todo');
  let stringHTML=''
  for(let i=0;i<personalTodo.length;i++){
    stringHTML+=`
      <div class='todo-card'>
        <div class='card-color todo-color-${personalTodo[i].type}'></div>
        <div class='todo-content'>
          <p class='todo-task-text'>Task:</p>
          <div class='todo-task'>${personalTodo[i].task}</div>
          <p class='todo-date-text'>Date:</p>
          <div class='todo-date'>${personalTodo[i].date}</div>
          <p class='todo-description-text'>Description:</p>
          <div class='todo-description'><span>${personalTodo[i].description}</span></div>
        </div>
        <button id='delete-personal-todo-${i}' class='delete-todo delete-personal-todo'><img src='Images/trash.png'></button>
      </div>
    `
  }
  personalTodoElement.innerHTML=stringHTML

  const deleteButtonElements = document.querySelectorAll('.delete-personal-todo')
  deleteButtonElements.forEach(button=>{
    button.addEventListener('click',()=>{deleteTodo(button,'personal')})
  })
}

function loadHealthTodo(){
  const healthTodoElement= document.querySelector('.health-all-todo');
  let stringHTML=''
  for(let i=0;i<healthTodo.length;i++){
    stringHTML+=`
      <div class='todo-card'>
        <div class='card-color todo-color-${healthTodo[i].type}'></div>
        <div class='todo-content'>
          <p class='todo-task-text'>Task:</p>
          <div class='todo-task'>${healthTodo[i].task}</div>
          <p class='todo-date-text'>Date:</p>
          <div class='todo-date'>${healthTodo[i].date}</div>
          <p class='todo-description-text'>Description:</p>
          <div class='todo-description'><span>${healthTodo[i].description}</span></div>
        </div>
        <button id='delete-health-todo-${i}' class='delete-todo delete-health-todo'><img src='Images/trash.png'></button>
      </div>
    `
  }
  healthTodoElement.innerHTML=stringHTML

  const deleteButtonElements = document.querySelectorAll('.delete-health-todo')
  deleteButtonElements.forEach(button=>{
    button.addEventListener('click',()=>{deleteTodo(button,'health')})
  })
}

function loadSchoolTodo(){
  const schoolTodoElement= document.querySelector('.school-all-todo');
  let stringHTML=''
  for(let i=0;i<schoolTodo.length;i++){
    stringHTML+=`
      <div class='todo-card'>
        <div class='card-color todo-color-${schoolTodo[i].type}'></div>
        <div class='todo-content'>
          <p class='todo-task-text'>Task:</p>
          <div class='todo-task'>${schoolTodo[i].task}</div>
          <p class='todo-date-text'>Date:</p>
          <div class='todo-date'>${schoolTodo[i].date}</div>
          <p class='todo-description-text'>Description:</p>
          <div class='todo-description'><span>${schoolTodo[i].description}</span></div>
        </div>
        <button id='delete-school-todo-${i}' class='delete-todo delete-school-todo'><img src='Images/trash.png'></button>
      </div>
    `
  }
  schoolTodoElement.innerHTML=stringHTML

  const deleteButtonElements = document.querySelectorAll('.delete-school-todo')
  deleteButtonElements.forEach(button=>{
    button.addEventListener('click',()=>{deleteTodo(button,'school')})
  })
}


function deleteTodo(button,type){
  const number = Number(button.id.charAt(button.id.length-1));
  let obj= null;
  let item=0;

  if(type==='work') obj=workTodo[number];
  if(type==='personal') obj=personalTodo[number];  
  if(type==='school') obj=schoolTodo[number];  
  if(type==='health') obj=healthTodo[number];
  if(type==='all'){
    item=number;
  }
  else{
    while(JSON.stringify(todoList[item])!==JSON.stringify(obj)){
      item++;
    }
  }
  todoList.splice(item,1);
  localStorage.setItem('todoList',JSON.stringify(todoList))
  divideTodo();
  loadTodoCards();
}



function checkWindowSize(){
  const sideBarWidth=document.querySelector('#side-bar').offsetWidth;
  const windowWidth = window.innerWidth;
  const allContainer=
  document.querySelectorAll('.adjust-window')
  allContainer.forEach((container)=>{
    container.style.paddingLeft=`${sideBarWidth+40}px`
    container.style.width=`${windowWidth-sideBarWidth-40}px`
  })
}



function divideTodo(){
  let type=null;
  emptyArrays();
  for(let i=0;i<todoList.length;i++){
    type=checktTypeobj(todoList[i]);
    switch (type){
      case 0:
        workTodo.push(todoList[i]);
        break;
      case 1:
        personalTodo.push(todoList[i]);
        break;
      case 2:
        healthTodo.push(todoList[i]);
        break;
      case 3:
        schoolTodo.push(todoList[i]);
        break;
    }
  }
}

function emptyArrays(){
  workTodo=[];
  personalTodo=[];
  schoolTodo=[];
  healthTodo=[];
}

checkWindowSize();
addEventListener("resize", () => {checkWindowSize()})