import { useRef } from "react";
import style from "./todoInput.module.scss";

interface Props {
  addTodo: (todoItemValue: string) => void;
}

const TodoInput = ({ addTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = function () {
    addTodo(inputRef.current.value);
  };

  return (
    <div className={style["todo-input"]}>
      <input
        className={style["todo-input__input"]}
        ref={inputRef}
        type="text"
        required
      />
      <button className={style["todo-input__button"]} onClick={handleAddTodo}>
        add todo
      </button>
    </div>
  );
};

export default TodoInput;
