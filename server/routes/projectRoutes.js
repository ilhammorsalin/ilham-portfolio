// ============================================================
// PROFESSOR NOTE - server/routes/projectRoutes.js
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the RECEPTIONIST.
// It listens at the door "/api/projects" and forwards to controller.
// ------------------------------------------------------------
// INTERFACE - URL TABLE YOU WILL IMPLEMENT:
// ------------------------------------------------------------
// TODO 1: IMPORT SECTION
//   - Bring in express (to create a Router).
//   - Bring in 5 functions from ../controllers/projectController.js.
//   - Bring in adminAuth from ../middleware/adminAuth.js.
//
// TODO 2: ROUTE MAP (Method + URL + Who can enter + Which controller):
//   - GET    /api/projects      -> PUBLIC,  calls getAllProjects
//   - GET    /api/projects/:id  -> PUBLIC,  calls getProjectById
//   - POST   /api/projects      -> PRIVATE (adminAuth), calls createProject
//   - PUT    /api/projects/:id  -> PRIVATE (adminAuth), calls updateProject
//   - DELETE /api/projects/:id  -> PRIVATE (adminAuth), calls deleteProject
//
// TODO 3: EXPORT the Router so server.js can use it with app.use().
//
// PROFESSOR ANALOGY:
//   GET = look at menu (anyone). POST/PUT/DELETE = enter kitchen (staff only).
//
// DO NOT WRITE CODE YET. Wait for Lesson 4 in chat.
// ============================================================
