import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;
const DATA_PATH = path.join(__dirname, "todos.json");

app.use(cors());
app.use(express.json());

const readTodos = () => {
  const data = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(todos, null, 2));
};

app.get("/api/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const filtered = todos.filter((todo) => todo.id !== Number(req.params.id));
  writeTodos(filtered);
  res.status(201).end();
});

app.put("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const updated = todos.map((todo) =>
    todo.id === Number(req.params.id) ? { ...todo, ...req.body } : todo,
  );
  writeTodos(updated);
  res.json(updated.find((todo) => todo.id === Number(req.params.id)));
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});
