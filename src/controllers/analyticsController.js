const Log = require('../models/Log');

exports.getDailyLogs = async (req, res) => {
  const logs = await Log.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } },
        count: { $sum: 1 }
      }
    }
  ]);

  res.json(logs);
};

exports.getUserActivity = async (req, res) => {
  const logs = await Log.aggregate([
    {
      $group: {
        _id: "$userId",
        actions: { $sum: 1 }
      }
    }
  ]);

  res.json(logs);
};