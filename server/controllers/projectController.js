// ============================================================
// PROFESSOR NOTE - server/controllers/projectController.js
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the WAITER in a restaurant.
// Routes (receptionist) take orders, Controllers (waiters) do the work:
// talk to Database (kitchen) and bring food back to customer (frontend).
// ------------------------------------------------------------
// INTERFACES - 5 FUNCTIONS YOU WILL IMPLEMENT (full CRUD + 1 read-one):
// ------------------------------------------------------------
// TODO 1: FUNCTION getAllProjects(req, res)
//   - PURPOSE: READ ALL - for your public portfolio page.
//   - INPUT: no input needed.
//   - OUTPUT: list of all projects, newest first.
//   - DATABASE ACTION: find all, sort by createdAt descending.
//
// TODO 2: FUNCTION getProjectById(req, res)
//   - PURPOSE: READ ONE - for detail view if you want it later.
//   - INPUT: id from URL params (example: /api/projects/123).
//   - OUTPUT: single project, or 404 message "Project not found".
//
// TODO 3: FUNCTION createProject(req, res)
//   - PURPOSE: CREATE - only from Admin panel.
//   - INPUT: title, description, techStack, imageUrl, liveLink, githubLink from req.body.
//   - OUTPUT: newly saved project with status 201.
//   - PROTECTION: Will later be guarded by adminAuth middleware.
//
// TODO 4: FUNCTION updateProject(req, res)
//   - PURPOSE: UPDATE - edit existing project from Admin panel.
//   - INPUT: id from params + new fields from body.
//   - OUTPUT: updated project, or 404 if not found.
//
// TODO 5: FUNCTION deleteProject(req, res)
//   - PURPOSE: DELETE - remove project from Admin panel.
//   - INPUT: id from params.
//   - OUTPUT: message "Project deleted", or 404.
//
// DO NOT WRITE CODE YET. Wait for Lesson 4 in chat.
// ============================================================
