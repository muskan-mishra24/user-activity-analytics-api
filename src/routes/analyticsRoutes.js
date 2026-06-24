const router = require('express').Router();
const { getDailyLogs, getUserActivity, getStats} = require('../controllers/analyticsController');

router.get('/daily', getDailyLogs);
router.get('/users', getUserActivity);
router.get("/stats", getStats);

module.exports = router;
