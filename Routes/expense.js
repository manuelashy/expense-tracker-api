import { Router } from "express";
import {
  addExpense,
  getExpenses,
  getExpense,
  deleteExpense,
} from "../Controllers/expense.js";

export const expenseRouter = Router();
expenseRouter.post("/expense", addExpense);
expenseRouter.get("/expense", getExpenses);
expenseRouter.get("/expense/id", getExpense);
expenseRouter.delete("/expense/id", deleteExpense);
