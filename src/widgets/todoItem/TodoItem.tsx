import { useState } from "react";
import style from "./todoItem.module.scss";
import downArrowIcon from "@/assets/icons/downArrow.svg";
import trashIcon from "@/assets/icons/trash.svg";
import { useAppDispatch } from "@/store/hooks";
import { deleteTodoByValue } from "@/store/slices/todoListSlice";

interface Props {
  value: string;
}

const TodoItem = ({ value }: Props) => {
  const dispatch = useAppDispatch();
  const handleDeleteTodo = function () {
    dispatch(deleteTodoByValue(value));
  };
  const [isEntireText, setIsEntireText] = useState(false);
  const ShowEntireText = function (): string {
    if (!isEntireText) {
      return `${style["todo-item_visible"]}`;
    } else {
      return "";
    }
  };
  const handleShowEntireText = function () {
    setIsEntireText((prevState) => !prevState);
  };

  return (
    <div className={`${style["todo-item"]} ${ShowEntireText()}`}>
      <img
        className={`${style["todo-item__icon"]} ${style["todo-item__arrow-icon"]}`}
        onClick={handleShowEntireText}
        src={downArrowIcon}
      />
      <div className={style["todo-item__text"]}>{value}</div>
      <img
        className={style["todo-item__icon"]}
        onClick={handleDeleteTodo}
        src={trashIcon}
      />
    </div>
  );
};

export default TodoItem;
