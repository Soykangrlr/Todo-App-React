
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { completedTodoAsync,selectActiveFilter,selectTodos,getTodoAsync,deleteTodoAsync } from "../../redux/todos/todosSlice";
import Error from "../error/error";
import Loading from "../loading/loading";
let filtered=[]
function ContentList() {
	const dispatch=useDispatch()
  const items = useSelector(selectTodos);
  const activeFilter = useSelector(selectActiveFilter);
  const isloading=useSelector(state=>state.todos.loading)
  const error=useSelector(state=>state.todos.iserror)
  useEffect(()=>{
    dispatch(getTodoAsync())
  },[dispatch])

    filtered=items
    if(activeFilter!=='all'){
      filtered=items.filter(todo=>activeFilter==='active'?todo.completed===false:todo.completed===true)
    }

  console.log(items);
  if(isloading){
    return(
      <Loading/>
    )
  }
  if(error){
    return(
      <Error massage={error}/>
    )
  }
  const handleComleted= async(id,completed)=>{
    await dispatch(completedTodoAsync({id,data:{completed}}))
  }
  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
				    onChange={()=>handleComleted(item.id,!item.completed)}
            />
            <label>{item.title}</label>
            <button onClick={async()=> await dispatch(deleteTodoAsync(item.id))} className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default ContentList;
