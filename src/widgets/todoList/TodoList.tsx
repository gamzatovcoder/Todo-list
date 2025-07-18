import style from "./todoList.module.scss";
import TodoItem from "../todoItem/TodoItem";
import { useAppSelector } from "@/store/hooks";

const TodoList = () => {
  const todoList = useAppSelector((store) => store.todoList);

  return (
    <ul className={style["todo-list"]}>
      {todoList.map((todo) => (
        <li className={style["todo-list__item"]}>
          <TodoItem value={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
