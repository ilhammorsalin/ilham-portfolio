// ============================================================
// PROFESSOR NOTE - client/src/pages/AdminPanel.jsx
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the CONTROL ROOM. Only YOU visit /admin.
// Here you do full CRUD: Create, Read, Update, Delete projects.
// ------------------------------------------------------------
// INTERFACE - 5 SECTIONS YOU WILL IMPLEMENT:
// ------------------------------------------------------------
// TODO 1: STATE
//   - STATE projects: array, holds list from backend.
//   - STATE adminKey: text, your secret from server .env (ADMIN_KEY).
//   - STATE editingProject: object or null, which row is being edited.
//   - STATE loading, error: for UX feedback.
//
// TODO 2: ON PAGE LOAD (useEffect)
//   - Call fetchProjects() from ../api/projectApi.js.
//   - Save result into projects state.
//   - This is READ.
//
// TODO 3: HANDLE CREATE
//   - FUNCTION handleCreate(formData).
//   - Calls createProject(formData, adminKey), then reloads list.
//
// TODO 4: HANDLE UPDATE
//   - FUNCTION handleUpdate(formData).
//   - Calls updateProject(editingProject._id, formData, adminKey).
//   - Then clears editingProject, reloads list.
//
// TODO 5: HANDLE DELETE
//   - FUNCTION handleDelete(id).
//   - Ask confirm(), then calls deleteProject(id, adminKey), reloads.
//
// TODO 6: RENDER
//   - Top: password input for adminKey.
//   - Middle: <AdminProjectForm /> for create/edit.
//   - Bottom: list with Edit + Delete buttons per project.
//
// ROUTE HOMEWORK: You will add route "/admin" -> <AdminPanel /> in App.jsx.
//   Professor explains: react-router-dom already installed in your client.
//
// DO NOT WRITE CODE YET. Wait for Lesson 6 in chat.
// ============================================================
