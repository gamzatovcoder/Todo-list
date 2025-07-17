import { useState } from "react";
import style from "./todoItem.module.scss";
import downArrowIcon from "@/assets/icons/downArrow.svg";
interface Props {
  value: string;
}

const TodoItem = ({ value }: Props) => {
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
        src={downArrowIcon}
        className={style["todo-item__text-show-button"]}
        onClick={handleShowEntireText}
      />
      <div className={style["todo-item__text"]}>{value}</div>
    </div>
  );
};

export default TodoItem;
