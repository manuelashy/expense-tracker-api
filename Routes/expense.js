import { Router } from "express";
import {
  addExpense,
  getExpenses,
  getExpense,
  deleteExpense,
} from "../Controllers/expense.js";

export const expenseRouter = Router();
