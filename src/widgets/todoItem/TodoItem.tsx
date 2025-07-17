import style from "./todoItem.module.scss";

interface Props {
  value: string;
}

const TodoItem = ({ value }: Props) => {
  return (
    <div className={style["todo-item"]}>
      <div className={style["todo-item__text"]}>{value}</div>
    </div>
  );
};

export default TodoItem;
