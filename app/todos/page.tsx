"use client";

import styles from "@/styles/todo/page.module.css";
import TodoForm from "@/app/todos/todoForm/page";
import TodoList from "@/app/todos/todoList/page";
import { useState } from "react";

export default function Todo() {
  const [todoArray, setTodoArray] = useState<string[]>(["hihih"]);
  const [newTodo, setNewTodo] = useState<string>("");

  const getNewTodo = (value: string): void => {
    setNewTodo(value);
  };

  const addTodo = (): void => {
    setTodoArray([...todoArray, newTodo]);
    setNewTodo("");
  };

  return (
    <main>
      <h1>Todo Container</h1>
      <TodoForm newTodo={newTodo} getNewTodo={getNewTodo} addTodo={addTodo} />

      <TodoList todoArray={todoArray} />
    </main>
  );
}
