/*
// add input , delete value, checkbox
document.getElementById('add-button').addEventListener
('click',function(){
    const taskInput=document.getElementById('task-input');
    const taskText=taskInput.value.trim();
    if(taskText){
        const taskList =document.getElementById('task-list');
        const li=document.createElement('li');

        const checkbox= document.createElement('input');
        checkbox.type='checkbox';
        checkbox.classList='checkbox';
        checkbox.onclick=function(){
            li.classList.toggle('completed');
    
    }

         const span=document.createElement('span');
         span.textContent=taskText;

         const deleteButton=document.createElement('button');
         deleteButton.textContent='Delete';
         deleteButton.className='delete-button';
         deleteButton.onclick=function(){
            taskList.removeChild(li);
         }
         li.appendChild(checkbox);
         li.appendChild(span);
         li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value='';
    }
})
    */

/*
// add input
document.getElementById('add-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');
        
        const li = document.createElement('li');
        li.textContent = taskText;
        
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input after adding
    }
});

*/
//input add delete task
document.getElementById('add-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');
        
        const li = document.createElement('li');
        //span area 
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        //li.textContent = taskText;

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input after adding
    }
});
