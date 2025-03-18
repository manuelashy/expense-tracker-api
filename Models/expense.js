import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

export const Expense = mongoose.model("expense", expenseSchema);
