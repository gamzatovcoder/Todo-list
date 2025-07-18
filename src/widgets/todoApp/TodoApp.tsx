import style from "./todoApp.module.scss";
import TodoInput from "../todoInput/TodoInput";
import TodoList from "../todoList/TodoList";

const TodoApp = () => {
  return (
    <div className={style["todo-app"]}>
      <div className={style["todo-app__input"]}>
        <TodoInput />
      </div>
      <div className={style["todo-app__list"]}>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
