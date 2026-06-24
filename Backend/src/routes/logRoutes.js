const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { createLog, getLogs } = require('../controllers/logController');

// Create log
router.post('/', auth, createLog);

// Get logs (NEW)
router.get('/', auth, getLogs);

module.exports = router;