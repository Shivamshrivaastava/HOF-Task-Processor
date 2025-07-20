# 📝 HOF Task Processor (Full Stack)

A modern, full-stack Task Manager Application built with:

- **Frontend**: Vanilla JavaScript (with Higher-Order Functions), Vite, HTML, and CSS  
- **Backend**: Node.js, Express.js, MongoDB (accessed and visualized via MongoDB Compass)  
- **APIs**: RESTful CRUD (Create, Read, Update, Delete)  

Functional programming and Higher-Order Functions power all client-side task logic for a truly educational project!

---

## 🚀 Features

- Create, view, update, and delete tasks  
- Add tags and priority to each task  
- Filter tasks by search or priority  
- Mark tasks as completed/incomplete  
- Batch clear completed tasks  
- Live UI updates with pure functions (HOFs)  
- Backend persistence in MongoDB  
- Works with MongoDB Compass GUI  

---

## 📁 Project Structure

```
project-root/
  backend/
    models/
      Task.js
    routes/
      tasks.js
    server.js
  src/
    index.html
    style.css
    main.js
    tasks.js
    hofUtils.js
  README.md
  package.json
```

---

## 🛠️ Prerequisites

- Node.js (v16+ recommended)  
- MongoDB (Community/Atlas), plus MongoDB Compass for GUI  
- npm (comes with Node.js)  
- Vite (installed locally or via `npm create vite@latest`)  
- Postman (optional, for API testing)  

---

## ⚡ Quick Start

### 1. Clone and Install

```bash
git clone <your-project-url>
cd project-root
```

### 2. Backend Setup

```bash
cd backend
npm install
node server.js
```

The API now runs at: `http://localhost:3001/api/tasks`

> Ensure MongoDB is running locally! (Check with Compass or mongo shell)

### 3. Frontend Setup (Vite)

```bash
cd ../src
npm install
npm run dev
```

Open the browser at the URL Vite prints (typically `http://localhost:5173`)

---

## 🎨 Application Preview

![App Screenshot Demo](https://github.com/Shivamshrivaastava/HOF-Task-Processor/blob/main/Task_Processor/Screenshot%202025-07-20%20143547.png?raw=true)


---

## 🧪 Endpoints (`/api/tasks`)

### List all tasks

```http
GET /api/tasks
```

### Get a single task

```http
GET /api/tasks/:id
```

### Create a new task

```http
POST /api/tasks
Content-Type: application/json

{
  "text": "Learn Redux",
  "done": false,
  "priority": 2,
  "tags": ["js", "redux"]
}
```

### Update a task

```http
PUT /api/tasks/:id
Content-Type: application/json

{
  "done": true,
  "priority": 4
}
```

### Delete a task

```http
DELETE /api/tasks/:id
```

> Try these endpoints in Postman!

---

## 💡 Functionality Powered by Higher-Order Functions (HOF)

- **Adding Tasks**: Factory HOFs to build task objects  
- **Filtering**: Chained/composed predicates for filter/search  
- **Batch Operations**: Array `.map`, `.filter`, `.reduce`  
- **Reducers**: Real-time summary stats in UI  
- **Reusable Functional Utilities**: (see `src/hofUtils.js`)  

---

## 🧩 MongoDB & Compass

- **Database**: `hof-tasks`  
- **Collection**: `tasks`  
- Use Compass or mongo shell to inspect/modify data live  

---

## 🏗️ Folder/File Highlights

| File/Folder | Purpose |
|-------------|---------|
| `backend/models/Task.js` | Mongoose schema/model for MongoDB tasks |
| `backend/routes/tasks.js` | Express router for all API endpoints |
| `backend/server.js` | API server (Express + MongoDB setup) |
| `src/main.js` | Entry point — handles DOM & all UI logic |
| `src/tasks.js` | Async functions for API calls via fetch |
| `src/hofUtils.js` | Reusable Higher-Order Function utilities |
| `src/style.css` | App styling (editable) |
| `src/index.html` | App skeleton |

---

## 🚦 Troubleshooting

- `Failed to fetch` or `ERR_CONNECTION_REFUSED` → Backend not running or using the wrong port. Make sure MongoDB and the server are up!  
- CORS errors → Ensure backend uses `app.use(cors())`  
- MongoDB not found → Start MongoDB service or use Atlas, and check Compass for data state.

---

## 🎉 Credits & License

Built with 💛 for learning Higher-Order Functions and full-stack development!
