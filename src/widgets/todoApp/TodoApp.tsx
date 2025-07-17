import style from "./todoApp.module.scss";
import TodoInput from "../todoInput/TodoInput";
import TodoList from "../todoList/TodoList";
import useTodoList from "@/hooks/useTodoList";

const TodoApp = () => {
  const { todoList, addTodo } = useTodoList();

  return (
    <div className={style["todo-app"]}>
      <div className={style["todo-app__input"]}>
        <TodoInput addTodo={addTodo} />
      </div>
      <div className={style["todo-app__list"]}>
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
};

export default TodoApp;
