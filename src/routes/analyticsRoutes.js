const router = require('express').Router();
const { getDailyLogs, getUserActivity } = require('../controllers/analyticsController');

router.get('/daily', getDailyLogs);
router.get('/users', getUserActivity);

module.exports = router;