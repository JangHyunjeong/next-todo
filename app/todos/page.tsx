"use client";

import styles from "@/styles/todo/page.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { NewTodoType } from "@/app/todos/type";
import TodoForm from "@/app/todos/todoForm/page";
import TodoList from "@/app/todos/todoList/page";

export default function Todo() {
  const [todoArray, setTodoArray] = useState<NewTodoType[]>([]);
  const [newTodo, setNewTodo] = useState<NewTodoType>({
    content: "",
    id: "",
    dateTime: "",
  });

  const getNewTodo = (value: string): void => {
    setNewTodo({
      content: value,
      id: uuidv4(),
      dateTime: String(new Date()),
    });
  };

  const addTodo = (): void => {
    setTodoArray([...todoArray, newTodo]);
    setNewTodo({
      content: "",
      id: "",
      dateTime: "",
    });
    console.log("==== todoArray ====", todoArray);
  };

  return (
    <main>
      <h1>Todo Container</h1>
      <TodoForm newTodo={newTodo} getNewTodo={getNewTodo} addTodo={addTodo} />

      <TodoList todoArray={todoArray} />
    </main>
  );
}
