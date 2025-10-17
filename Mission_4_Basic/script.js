//data simpan
let todos = [];
let doneItems = [];

//Update waktu
function updateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    document.getElementById('currentTime').textContent = now.toLocaleDateString('id-ID', options);
}

//inisialisasi waktu
setInterval(updateTime, 60000);
updateTime();

//form submit
document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('todoText').value.trim();
    const priority = document.querySelector('input[name="priority"]:checked').value;

    if (text) {
        const todo = {
            id: Date.now(),
            text: text,
            priority: priority,
            createdAt: new Date().toLocaleDateString('id-ID')
        };

        todos.push(todo);
        renderTodos();

        //reset form
        document.getElementById('todoText').value = '';
        document.getElementById('priorityLow').checked = true;
    }
});

//render todo list
function renderTodos() {
            const todoList = document.getElementById('todoList');
            const todoEmpty = document.getElementById('todoEmpty');
            
            if (todos.length === 0) {
                todoList.style.display = 'none';
                todoEmpty.style.display = 'block';
            } else {
                todoList.style.display = 'block';
                todoEmpty.style.display = 'none';
                
                todoList.innerHTML = todos.map(todo => `
                    <li class="todo-item">
                        <div class="checkbox-wrapper">
                            <input type="checkbox" onchange="moveToDone(${todo.id})">
                        </div>
                        <div class="todo-content">
                            <div class="todo-text">${todo.text}</div>
                            <div class="todo-meta">
                                <span class="priority-badge ${todo.priority}">${todo.priority.toUpperCase()}</span>
                                <span class="todo-time">${todo.createdAt}</span>
                            </div>
                        </div>
                        <button class="btn-delete" onclick="deleteTodo(${todo.id})">Hapus</button>
                    </li>
                `).join('');
            }
            
            renderDone();
        }

//render done Items
function renderDone() {
            const doneList = document.getElementById('doneList');
            const doneEmpty = document.getElementById('doneEmpty');
            
            if (doneItems.length === 0) {
                doneList.style.display = 'none';
                doneEmpty.style.display = 'block';
            } else {
                doneList.style.display = 'block';
                doneEmpty.style.display = 'none';
                
                doneList.innerHTML = doneItems.map(item => `
                    <li class="todo-item done">
                        <div class="checkbox-wrapper">
                            <input type="checkbox" checked disabled>
                        </div>
                        <div class="todo-content">
                            <div class="todo-text">${item.text}</div>
                            <div class="todo-meta">
                                <span class="priority-badge ${item.priority}">${item.priority.toUpperCase()}</span>
                                <span class="todo-time">${item.createdAt}</span>
                            </div>
                        </div>
                        <button class="btn-delete" onclick="deleteDone(${item.id})">Hapus</button>
                    </li>
                `).join('');
            }
        }

        // Move to done
        function moveToDone(id) {
            const todoIndex = todos.findIndex(t => t.id === id);
            if (todoIndex !== -1) {
                const todo = todos[todoIndex];
                doneItems.push(todo);
                todos.splice(todoIndex, 1);
                renderTodos();
            }
        }

        // Delete todo
        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            renderTodos();
        }

        // Delete done
        function deleteDone(id) {
            doneItems = doneItems.filter(t => t.id !== id);
            renderDone();
        }

        // Delete all todo
        function deleteAllTodo() {
            if (todos.length > 0 && confirm('Hapus semua tugas yang belum selesai?')) {
                todos = [];
                renderTodos();
            }
        }

        // Delete all done
        function deleteAllDone() {
            if (doneItems.length > 0 && confirm('Hapus semua tugas yang sudah selesai?')) {
                doneItems = [];
                renderDone();
            }
        }

        // Initial render
        renderTodos();