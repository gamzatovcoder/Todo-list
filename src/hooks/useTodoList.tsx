import { useState } from "react";

const useTodoList = () => {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = function (todoItemValue: string): void {
    if (todoItemValue) {
      setTodoList((prevState) => [...prevState, todoItemValue]);
    }
  };
  return { todoList, addTodo };
};

export default useTodoList;
