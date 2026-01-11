const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");

const router = express.Router();

// Add expense
router.post("/", auth, async (req, res) => {
  const { amount, description, date } = req.body;
  try {
    const expense = new Expense({
      user: req.user.id,
      amount,
      description,
      date,
    });
    await expense.save();
    res.json(expense);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all expenses for user
router.get("/", auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      date: -1,
    });
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    res.json({ expenses, total });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
