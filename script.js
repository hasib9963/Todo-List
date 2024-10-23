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
            completeBtn.textContent = completeBtn.textContent === 'Complete' ? 'Uncomplete' : 'Complete';
        });
    }

});