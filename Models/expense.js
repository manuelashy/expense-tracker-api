import mongoose, { now, Schema } from "mongoose";

const expenseSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: date.now() },
});

export const Expense = mongoose.model("expense", expenseSchema);
