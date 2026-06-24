const Log = require('../models/Log');

// CREATE LOG
exports.createLog = async (req, res) => {
  const { action } = req.body;

  const log = await Log.create({
    userId: req.user.id,
    action
  });

  res.json(log);
};

// GET LOGS (with filter + pagination)
exports.getLogs = async (req, res) => {
  try {
    const { action, page = 1 } = req.query;
    const limit = 5;

    let filter = { userId: req.user.id };

    if (action) {
      filter.action = action;
    }

    const logs = await Log.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};