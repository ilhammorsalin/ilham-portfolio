// ============================================================
// PROFESSOR NOTE - client/src/api/projectApi.js
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the TELEPHONE between React and Express.
// React never talks directly to MongoDB. It calls this file,
// this file calls "http://localhost:5000/api/projects".
// ------------------------------------------------------------
// INTERFACES - 5 FUNCTIONS YOU WILL IMPLEMENT (match backend):
// ------------------------------------------------------------
// TODO 1: CONSTANT API_URL
//   - Value: "http://localhost:5000/api/projects".
//   - Later: you will move this to .env (VITE_API_URL) for deployment.
//
// TODO 2: FUNCTION fetchProjects()
//   - PURPOSE: GET all for public portfolio (your ProjectsSection).
//   - OUTPUT: array of projects.
//
// TODO 3: FUNCTION createProject(data, adminKey)
//   - PURPOSE: POST new project from Admin.
//   - INPUT: data = {title, description, techStack...}, adminKey = your secret.
//   - HEADER: must send "x-admin-key": adminKey.
//
// TODO 4: FUNCTION updateProject(id, data, adminKey)
//   - PURPOSE: PUT edit.
//   - INPUT: id + new data + adminKey.
//
// TODO 5: FUNCTION deleteProject(id, adminKey)
//   - PURPOSE: DELETE.
//   - INPUT: id + adminKey.
//
// PROFESSOR TIP: All 5 use "fetch()". No library needed for Lesson 1.
//
// DO NOT WRITE CODE YET. Wait for Lesson 5 in chat.
// ============================================================
