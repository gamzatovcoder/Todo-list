import style from "./todoList.module.scss";
import TodoItem from "../todoItem/TodoItem";

interface Props {
  todoList: string[];
}

const TodoList = ({ todoList }: Props) => {
  return (
    <div className={style["todo-list"]}>
      {todoList.map((todoItem) => (
        <TodoItem value={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
