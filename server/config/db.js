// ============================================================
// PROFESSOR NOTE - server/config/db.js
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the DATABASE PLUG.
// Its only job: connect your Express server to MongoDB Atlas cloud.
// ------------------------------------------------------------
// INTERFACE YOU WILL IMPLEMENT (write code under each TODO):
// ------------------------------------------------------------
// TODO 1: IMPORT SECTION
//   - You will need to bring in the library called "mongoose".
//   - Professor explains: mongoose is a translator between Node.js and MongoDB.
//
// TODO 2: FUNCTION connectDB()
//   - Input: nothing. It reads process.env.MONGO_URI by itself.
//   - Output: a connection promise. If success, print "MongoDB Connected".
//   - If fail, print error and stop the server (process.exit).
//   - HINT: This function will be called once from server.js.
//
// TODO 3: EXPORT SECTION
//   - You will make connectDB usable by other files.
//   - HINT: Other file will ask for it with require/import.
//
// DO NOT WRITE CODE YET. Wait for Lesson 2 in chat.
// ============================================================
