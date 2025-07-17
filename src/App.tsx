import style from "./App.module.scss";
import TodoApp from "./widgets/todoApp/TodoApp";

function App() {
  return (
    <div className={style.app}>
      <div className={style["app__todo-app"]}>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
