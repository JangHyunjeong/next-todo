"use client";

import styles from "@/styles/todo/page.module.css";
import TodoForm from "@/app/todos/todoForm/page";
import TodoList from "@/app/todos/todoList/page";
import { useState } from "react";

export default function Todo() {
  const [newTodo, setNewTodo] = useState<string>("");

  const getNewTodo = (value: string): void => {
    setNewTodo(value);
  };

  return (
    <main>
      <h1>Todo Container</h1>
      <TodoForm newTodo={newTodo} getNewTodo={getNewTodo} />
      <TodoList />
    </main>
  );
}
