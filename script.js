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
    }

});