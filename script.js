const taskinput = document.getElementById('taskinput');
const addTaskbtn = document.getElementById('addBtn');
const taskList = document.getElementById('tasklist');
const clearBtn = document.getElementById('clearBtn');
let tasks=JSON.parse(localStorage.getItem('fresh_tasks_vault')) || [];
function renderTask(taskText){
const card = document.createElement('div');
card.classList.add('task-card');
const textSpan = document.createElement('span');
 textSpan.textContent=taskText;
 const checkbox = document.createElement('input');
checkbox.type='checkbox';
 checkbox.checked = task.completed;
card.appendChild(textSpan);
 checkbox.addEventListener('click',()=>{task.completed = checkbox.checked;
localStorage.setItem('fresh_tasks_vault',JSON.stringify(tasks))})
card.appendChild(checkbox);
taskList.appendChild(card);
}
tasks.forEach(renderTask);
addTaskbtn.addEventListener('click',()=>{
const text =taskinput.value.trim();
if(text==='')return;
 const newTask = { text: text, completed: false };
renderTask(newTask);
tasks.push(newTask);
localStorage.setItem('fresh_tasks_vault',JSON.stringify (tasks));
taskinput.value='';
});
clearBtn.addEventListener('click', () => {
  tasks = [];
  localStorage.removeItem('fresh_tasks_vault');
  taskList.innerHTML = '';
});


