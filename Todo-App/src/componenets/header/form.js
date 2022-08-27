import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { addTodoAsync } from "../../redux/todos/todosSlice";
import Error from "../error/error";
import Loading from "../loading/loading";
function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const isloading=useSelector(state=>state.todos.addNewIsLoading)
  const error=useSelector(state=>state.todos.addError)
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (title.trim() !== "") {
     dispatch(addTodoAsync({title}));
    }else{
      alert('Boş Bir Todo ekleyemezsiniz')
    }

    setTitle("");
  };
  return (
    <form style={{display:"flex",alignItems:"center"}} onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      {isloading&&<Loading/>}
      {error&&<Error massage={error}/>}
    </form>
  );
}
export default Form;
