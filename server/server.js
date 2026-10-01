// ============================================================
// PROFESSOR NOTE - server/server.js
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the MAIN BUILDING. Everything plugs in here.
// Express = building, MongoDB = warehouse, Routes = hallways.
// ------------------------------------------------------------
// INTERFACE - STARTUP CHECKLIST YOU WILL IMPLEMENT IN ORDER:
// ------------------------------------------------------------
// TODO 1: IMPORTS + SETUP
//   - Bring in express, cors, dotenv.
//   - Load .env file with dotenv.config().
//   - Bring in connectDB from ./config/db.js.
//   - Bring in projectRoutes from ./routes/projectRoutes.js.
//
// TODO 2: CREATE APP
//   - Create express app.
//   - Allow JSON bodies (app.use express.json).
//   - Allow CORS only from process.env.CLIENT_URL (your React address).
//
// TODO 3: CONNECT DATABASE
//   - Call connectDB() once.
//
// TODO 4: MOUNT ROUTES
//   - Mount projectRoutes at "/api/projects".
//   - Add a test route GET "/" that returns "API running".
//
// TODO 5: START LISTENING
//   - Listen on process.env.PORT or 5000.
//   - Print "Server running on port X".
//
// HOW TO RUN (after you implement):
//   - Command: npm run dev (we will add this to package.json in Lesson 2).
//
// DO NOT WRITE CODE YET. Wait for Lesson 2 in chat.
// ============================================================
