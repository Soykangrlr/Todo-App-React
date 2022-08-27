import { useSelector,useDispatch } from "react-redux";
import { changeActive,selectTodos,selectActiveFilter ,clearCompleted} from "../../redux/todos/todosSlice";
function ContentFooter() {
    const dispatch=useDispatch()
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;
  const activeFilter = useSelector(selectActiveFilter);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> {itemsLeft > 1 ? "items" : "item"} left 
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={activeFilter === "all" ? "selected" : ""}
          onClick={()=>dispatch(changeActive('all'))}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === "active" ? "selected" : ""}
            onClick={()=>dispatch(changeActive('active'))}>
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={()=>dispatch(changeActive('completed'))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={()=>dispatch(clearCompleted())}>Clear completed</button>
    </footer>
  );
}
export default ContentFooter;
