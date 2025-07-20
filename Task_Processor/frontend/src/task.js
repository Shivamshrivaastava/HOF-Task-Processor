const API = 'http://localhost:3001/api/tasks';

export const fetchTasks = async () => (await fetch(API)).json();
export const addTask = async (task) => 
  (await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  })).json();
export const updateTask = async (id, updates) =>
  (await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  })).json();
export const deleteTask = async (id) =>
  fetch(`${API}/${id}`, { method: 'DELETE' });
