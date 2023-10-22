import { useState } from "react";

export function useTodo(initialItems?: string[]) {
  const [todos, setTodos] = useState<string[]>(initialItems || []);

  /* Add your todo methods here */
  const addItem = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, text]);
  };

  const removeItem = (index: number) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  const changeItem = (value:string, index: number) => {
    const newTodo = [...todos];
    newTodo[index] = value;
    setTodos(newTodo);
  }

  return {
    todos,
    addTodo: addItem,
    removeTodo: removeItem,
    changeTodo: changeItem,
  };
}
