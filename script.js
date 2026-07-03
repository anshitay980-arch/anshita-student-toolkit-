const task input=document.getElementById('taskinput');
   const addTaskBtn=document.getElementById('addtaskBtn');
addTaskBtn.addEventListener('click',()=>{taskinput.focus();
    const newRow=document.createElement('tr');const taskText =taskinput.value;
const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    const checkboxcell=document.createElement('td');
   checkboxcell.appendChild(checkbox);});
