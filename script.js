document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add-btn');
    const newTodoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = newTodoInput.value.trim();

        if (todoText === '') {
            alert('Please enter text.');
            return;
        }

        const todoItem = document.createElement('li');
        todoItem.classList.add('flex', 'items-center', 'justify-between', 'bg-gray-100', 'p-3', 'rounded-md', 'shadow-sm');

        const todoLabel = document.createElement('span');
        todoLabel.textContent = todoText;
        todoLabel.classList.add('todo-text', 'text-gray-800', 'flex-grow', 'mr-2');

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('flex', 'items-center', 'space-x-2');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('text-sm', 'bg-green-500', 'text-white', 'px-3', 'py-1', 'rounded-md', 'hover:bg-green-600');
        completeBtn.addEventListener('click', () => {
            todoLabel.classList.toggle('line-through');
            completeBtn.textContent = completeBtn.textContent === 'Complete' ? 'Incomplete' : 'Complete';
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('text-sm', 'bg-yellow-500', 'text-white', 'px-3', 'py-1', 'rounded-md', 'hover:bg-yellow-600');
        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Edit') {
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.value = todoLabel.textContent;
                editInput.classList.add('w-full', 'p-1', 'border', 'border-gray-300', 'rounded-md', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
                
                // Add cue for editing
                todoItem.classList.add('bg-yellow-200');
                
                todoItem.replaceChild(editInput, todoLabel);
                editBtn.textContent = 'Save';
            } else {
                const updatedText = todoItem.querySelector('input').value.trim();
                todoLabel.textContent = updatedText;

                // Remove cue after editing
                todoItem.classList.remove('bg-yellow-200'); 
                
                todoItem.replaceChild(todoLabel, todoItem.querySelector('input'));
                editBtn.textContent = 'Edit';
            }
        });
    }

});