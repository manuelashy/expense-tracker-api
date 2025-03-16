import { Expense } from "../Models/expense";

export const addExpense = async (req, res) => {
  const expense = new Expense(req.body);
  const newExpense = await expense.save();
  res.status(200).json({ expense: newExpense });
};

export const getExpenses = async (req, res) => {
  const allExpense = await Expense.find();
  res.status(200).json({ expense: allExpense });
};

export const getExpense = async (req, res) => {
  const singleExpense = await Expense.findById(req.params.id);
  res.status(200).json({ expense: singleExpense });
};

export const deleteExpense = async (req, res) => {
  const expense = await Expense.findByIdAndDelete(req.params.id, req.body);
  res.status(204);
};
