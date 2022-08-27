import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";


export const getTodoAsync=createAsyncThunk('todos/getTodoAsync',async()=>{
    const res= await fetch(`${process.env.REACT_APP_API_BASE}`).then(res=> res.json())
    return res
  })
  export const addTodoAsync=createAsyncThunk('todos/addTodoAsync',async(data)=>{
    const res= await axios.post(`${process.env.REACT_APP_API_BASE}`,data)
    return res.data
  })

  export const completedTodoAsync=createAsyncThunk('todos/completedTodoAsync',async({id,data})=>{
    const res= await axios.patch(`${process.env.REACT_APP_API_BASE}/${id}`,data)
    return res.data
  })

  export const deleteTodoAsync=createAsyncThunk('todos/deleteTododAsync',async(id)=>{
    await axios.delete(`${process.env.REACT_APP_API_BASE}/${id}`)
    return id
  })

  export const clearCompleted=createAsyncThunk('todos/clearCompleted',async()=>{
    const res=await axios.post(`${process.env.REACT_APP_API_BASE}/clearcompleted`)
    return res.data
  })