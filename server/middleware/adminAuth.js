// ============================================================
// PROFESSOR NOTE - server/middleware/adminAuth.js
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the BOUNCER at the club door.
// Before CREATE/UPDATE/DELETE, it checks: "Do you know the secret password?"
// ------------------------------------------------------------
// INTERFACE YOU WILL IMPLEMENT:
// ------------------------------------------------------------
// TODO 1: FUNCTION adminAuth(req, res, next)
//   - INPUT: req.headers["x-admin-key"] (sent from your Admin panel).
//   - LOGIC:
//     a) Read secret from process.env.ADMIN_KEY (your .env).
//     b) Read key sent by frontend from headers.
//     c) If they MATCH -> call next() (let them enter).
//     d) If NOT MATCH -> return 401 "Unauthorized: wrong admin key".
//   - OUTPUT: either next() or 401 error.
//
// TODO 2: EXPORT adminAuth.
//
// PROFESSOR NOTE: This is SIMPLE auth for learning.
// Later course: you can upgrade to JWT login. For now, one secret key is enough
// to keep strangers from deleting your portfolio while keeping MERN concepts clear.
//
// DO NOT WRITE CODE YET. Wait for Lesson 4 in chat.
// ============================================================
