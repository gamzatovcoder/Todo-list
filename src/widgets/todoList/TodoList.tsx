import style from "./todoList.module.scss";
import TodoItem from "../todoItem/TodoItem";

interface Props {
  todoList: string[];
}

const TodoList = ({ todoList }: Props) => {
  return (
    <ul className={style["todo-list"]}>
      {todoList.map((todoItem) => (
        <li className={style["todo-list__item"]}>
          <TodoItem value={todoItem} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
