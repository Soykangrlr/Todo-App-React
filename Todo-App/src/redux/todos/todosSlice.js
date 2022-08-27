import { createSlice} from "@reduxjs/toolkit";
import { addTodoAsync, getTodoAsync,completedTodoAsync,deleteTodoAsync,clearCompleted } from "./services";
export * from './services'


const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading:false,
    iserror:null,
    activeFilter: "all",
    addNewIsLoading:false,
    addError:null
  },
  reducers: {
    
    changeActive: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => !item.completed);
      state.items = filtered;
    },
  },
  extraReducers:{
    // Get Todo
    [getTodoAsync.pending]:(state)=>{
      state.loading=true
    },
    [getTodoAsync.fulfilled]:(state,action)=>{
      state.items=action.payload
      state.loading=false
    },
    [getTodoAsync.rejected]:(state,action)=>{
      console.log(action);
      state.loading=false
      state.iserror=action.error.message
     
    },
    //Post Todo
    [addTodoAsync.pending]:(state)=>{
      state.addNewIsLoading=true
    },
    [addTodoAsync.fulfilled]:(state,action)=>{
      state.items.push(action.payload)
      state.addNewIsLoading=false
    },
    [addTodoAsync.rejected]:(state,action)=>{
      state.addError=action.error.message
      state.addNewIsLoading=false
    },
    // Patch Todo
    [completedTodoAsync.fulfilled]:(state,action)=>{
     const {id,completed}=action.payload
     const index=state.items.findIndex(item=>item.id===id)
     state.items[index].completed=completed
    },
    // Delete Todo
    [deleteTodoAsync.fulfilled]:(state,action)=>{
      const id=action.payload
      const index=state.items.findIndex(item=>item.id===id)
      state.items.splice(index,1)
    },
    [clearCompleted.fulfilled]:(state,action)=>{
      const data=action.payload
      const fitered = data.filter((item) => !item.completed);
      state.items=data
    },
  }
});
export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const {
  changeActive,
  
} = todoSlice.actions;
export default todoSlice.reducer;
