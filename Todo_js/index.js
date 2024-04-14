(function () {

    console.log("welcome to todo")
    let tasks = []

    const form = document.querySelector('.form');
    const button__submit = form.querySelector('input[type="submit"]');
    console.log(button__submit)
    const render__space = document.querySelector('.render__todo')
  
    const edit_div = document.querySelector('.edit__div')
    const edit__button = document.querySelector('.edit__button')

    const edit__form = document.querySelector('.edit__div--form')
    edit_div.addEventListener('click',(e)=>{
       
        if(e.target.tagName === 'DIV'){
            edit_div.style.display = 'none'
        }
       
    })



    edit__form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let formData = new FormData(edit__form)
        let res = [...formData.entries()]
        console.log(res[0][1])
        const taskId = edit__form.getAttribute('data-task-id');
        
        const indexToEdit = parseInt(taskId.split('-')[1]);

        // Update the value in the tasks array
        tasks[indexToEdit] = res[0][1];

        // Hide the edit form
        edit_div.style.display = 'none';

        // Render the tasks
        renderTodo();
    })



    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(form);
     
        let res = [...formData.entries()]
        tasks.push(res[0][1])
      
        renderTodo()
        
    })
   

    function renderTodo(){
        if (tasks.length === 0) {
            render__space.innerHTML = 'No tasks';
        } else {
            render__space.innerHTML = ''; // You can customize this message
            tasks.forEach((element,index) => {
                let task = document.createElement('DIV')
                task.classList.add('newTask')
                task.setAttribute('id',`task-${index}`)
                task.innerHTML = `<p class='taskP'>${element}</p>  <button class="edit__button">edit</button> <i class="employeeDelete">❌</i>`
                render__space.append(task)
             
            })
        }
        

    }
    renderTodo()

    render__space.addEventListener('click',(e)=>{
         console.log(e.target.tagName)
         if(e.target.tagName === 'I'){
            console.log(e.target.parentElement.id)
            tasks = tasks.filter((element,index)=> `task-${index}` !== e.target.parentElement.id)
         }
         
         if (e.target.tagName === 'BUTTON') {
            // Identify the task to edit
            const taskId = e.target.parentElement.id;
          
            const indexToEdit = parseInt(taskId.split('-')[1]);
    
            // Retrieve the task details
            const taskToEdit = tasks[indexToEdit];
    
            // Populate the form for editing
            edit_div.style.display = 'flex';
            // Assuming there's an input field in your edit form
            const editInput = edit_div.querySelector('.edit-input');
            editInput.value = taskToEdit;


            edit__form.setAttribute('data-task-id', taskId);
        }



         renderTodo()
    })

})();
