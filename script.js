const taskinput = document.getElementById('taskinput');
const addTaskbtn = document.getElementById('addBtn');
const taskList = document.getElementById('tasklist');
const clearBtn = document.getElementById('clearBtn');
let tasks=JSON.parse(localStorage.getItem('fresh_tasks_vault')) || [];
