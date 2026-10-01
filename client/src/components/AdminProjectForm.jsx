// ============================================================
// PROFESSOR NOTE - client/src/components/AdminProjectForm.jsx
// ------------------------------------------------------------
// WHAT IS THIS FILE?
// This is the INPUT FORM for Create + Edit.
// Used INSIDE AdminPanel. It does NOT talk to backend itself.
// It just collects typing and gives it to parent.
// ------------------------------------------------------------
// INTERFACE (PROPS) YOU WILL IMPLEMENT:
// ------------------------------------------------------------
// TODO 1: PROPS DEFINITION
//   - PROP initialData: object or null. If null = Create mode, if object = Edit mode.
//   - PROP onSubmit: function(formData). Parent decides POST vs PUT.
//   - PROP onCancel: function(). For closing Edit mode.
//
// TODO 2: STATE (useState for each field)
//   - STATE title: text input, REQUIRED.
//   - STATE description: textarea, REQUIRED.
//   - STATE techStack: text input comma-separated, you split to array later.
//     Example typing: "React, Node, Mongo" -> ["React","Node","Mongo"]
//   - STATE imageUrl, liveLink, githubLink: text inputs, OPTIONAL.
//
// TODO 3: RENDER
//   - Show 6 inputs + Save button + Cancel button.
//   - On Save: call onSubmit({title, description, techStack array, ...}).
//
// PROFESSOR TIP: This component is REUSABLE. Same form for Add and Edit.
//
// DO NOT WRITE CODE YET. Wait for Lesson 6 in chat.
// ============================================================
