const Log = require("../models/Log");
const User = require("../models/User");

exports.getDailyLogs = async (req, res) => {
  const logs = await Log.aggregate([
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$timestamp"
          }
        },
        count: { $sum: 1 }
      }
    }
  ]);

  res.json(logs);
};

exports.getUserActivity = async (req, res) => {
  try {
    const logs = await Log.aggregate([
      {
        $group: {
          _id: "$userId",
          actions: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $unwind: "$user"
      },
      {
        $project: {
          _id: 0,
          email: "$user.email",
          actions: 1
        }
      }
    ]);

    res.json(logs);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
exports.getStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalLogs = await Log.countDocuments();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayLogs = await Log.countDocuments();

    res.json({
      totalUsers,
      totalLogs,
      todayLogs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
