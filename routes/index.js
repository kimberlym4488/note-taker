const router = require('express').Router();
// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');

router.use('/api/notes', notesRouter);

// TODO: Initialize diagnostics route

module.exports = router;
