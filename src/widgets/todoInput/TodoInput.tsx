import { useRef } from "react";
import style from "./todoInput.module.scss";
import { useAppDispatch } from "@/store/hooks";
import { addTodo } from "@/store/slices/todoListSlice";

const TodoInput = () => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = function () {
    const inputValue = inputRef.current.value;
    dispatch(addTodo({ id: Date.now(), value: inputValue }));
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
