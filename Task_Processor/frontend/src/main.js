import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask
} from './task.js';

import { makeUpdater, and } from './hofUtils.js';

let tasks = []; // Holds tasks fetched from backend

// HOFs for frontend-side filtering
const containsText = txt => t => t.text.toLowerCase().includes(txt.toLowerCase());
const minPriority = p => t => t.priority >= p;

// Render summary using reduce HOF
function renderSummary(filteredTasks) {
  const summary = filteredTasks.reduce(
    (acc, t) => {
      acc.total += 1;
      if (t.done) acc.done += 1;
      return acc;
    },
    { total: 0, done: 0 }
  );
  document.getElementById("summary").textContent =
    `Total: ${summary.total} | Done: ${summary.done} | Remaining: ${summary.total - summary.done}`;
}

// Render tasks based on passing filter HOFs
function renderTasks(filters = []) {
  const list = document.getElementById("taskList");
  const predicate = and(...filters);
  const filtered = tasks.filter(predicate);

  list.innerHTML = '';
  for (const task of filtered) {
    const li = document.createElement('li');
    li.className = task.done ? 'done' : '';
    li.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} data-id="${task._id}" />
      ${task.text}
      <span class="tags">[${task.tags?.join(", ") || ''}]</span>
      <span style="margin-left:0.7em;color:#666">(Prio:${task.priority})</span>
      <button data-id="${task._id}">&times;</button>
    `;
    list.appendChild(li);
  }

  renderSummary(filtered);
}

// Convenience: build HOF predicates from UI
function getFilters() {
  const text = document.getElementById("filterText").value.trim();
  const prio = parseInt(document.getElementById("prioSelect").value) || 0;
  const filters = [() => true];

  if (text) filters.push(containsText(text));
  if (prio) filters.push(minPriority(prio));
  return filters;
}

// Load tasks from backend and render
async function reloadAndRender() {
  tasks = await fetchTasks();
  renderTasks(getFilters());
}

// --- Event handlers ---

// Add a task
document.getElementById("taskForm").addEventListener("submit", async e => {
  e.preventDefault();
  const text = document.getElementById("taskText").value.trim();
  const tags = document.getElementById("tags").value.split(',').map(t => t.trim()).filter(Boolean);
  const prio = Number(document.getElementById("priority").value) || 1;
  if (!text) return;
  await addTask({ text, tags, priority: prio });
  document.getElementById("taskForm").reset();
  reloadAndRender();
});

// Checkbox toggles done via API
document.getElementById("taskList").addEventListener("change", async e => {
  if (e.target.type === "checkbox") {
    const id = e.target.dataset.id;
    const task = tasks.find(t => t._id === id);
    if (task) {
      await updateTask(id, { done: !task.done });
      reloadAndRender();
    }
  }
});

// Delete task button
document.getElementById("taskList").addEventListener("click", async e => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;
    await deleteTask(id);
    reloadAndRender();
  }
});

// Filtering UI events
document.getElementById("filterText").addEventListener("input", () => renderTasks(getFilters()));
document.getElementById("prioSelect").addEventListener("change", () => renderTasks(getFilters()));

// Clear completed
document.getElementById("clearBtn").addEventListener("click", async () => {
  const completed = tasks.filter(t => t.done);
  for (const t of completed) await deleteTask(t._id);
  reloadAndRender();
});

// Initial render
reloadAndRender()