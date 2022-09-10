import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk("todos/getTodo", async () => {
  const res = await axios("https://6316618d82797be77fe481d0.mockapi.io/todos");
  return await res.data;
});


export const getTodoId = createAsyncThunk("todos/getTodoId",async(id)=>{
  const res =await axios(`https://6316618d82797be77fe481d0.mockapi.io/todos/${id}`);
  return await res.data;
})
  

export const postTodo = createAsyncThunk("todos/postTodo", async (data) => {
  const res = await axios.post(
    "https://6316618d82797be77fe481d0.mockapi.io/todos",
    data
  );
  return await res.data;
});

export const putTodo =createAsyncThunk("todos/putTodo",async ({id,data})=>{
  const res = await axios.put(`https://6316618d82797be77fe481d0.mockapi.io/todos/${id}`,data);
  return res.data;
})

export const deleteTodo =createAsyncThunk("todos/deleteTodo",async(id)=>{
  await axios.delete(`https://6316618d82797be77fe481d0.mockapi.io/todos/${id}`);
  return id;
})

export const updateCompletedTodo = createAsyncThunk("todos/updateCompletedTodo",async({id,data})=>{
  const res = await axios.put(`https://6316618d82797be77fe481d0.mockapi.io/todos/${id}`,data)
  return  await res.data;
})

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filteredItems:[],
    theme:false,
    isLoading: false,
    error: null,
    postNewTodo: {
      isLoading: false,
      error: false,
    },
  },
  reducers: {
      changeMode: (state,action)=>{
        state.theme = action.payload;
        localStorage.setItem("Darkmode",state.theme)
      }

  },
  extraReducers: {
    //GET TODO
    [getTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //POST TODO
    [postTodo.pending]: (state, action) => {
      state.postNewTodo.isLoading = true;
    },
    [postTodo.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.postNewTodo.isLoading = false;
    },
    [postTodo.rejected]:(state,action) =>{
      state.postNewTodo.error = action.error.message ;
      state.postNewTodo.isLoading = false;
    },
    //PUT TODO 
    [putTodo.fulfilled]:(state,action)=>{
      const {id,content} = action.payload;
      const index = state.items.findIndex(item=> item.id ===id);
      state.items[index].content = content;
    },
    //DELETE TODO
     [deleteTodo.fulfilled] : (state,action)=>{
      const id = action.payload;
      const index = state.items.findIndex(item=>item.id ===id);
      state.items.splice(index,1);
     },
     //COMPLETED TODO
     [updateCompletedTodo.fulfilled]:(state,action) =>{
      const {id,isCompleted} = action.payload;
      const index =state.items.findIndex(item=>item.id===id);
      state.items[index].isCompleted = isCompleted;
     },
     //GET ID TODO
     [getTodoId.fulfilled]:(state,action)=>{
      const {id} = action.payload;
      const index =state.items.find(item=>item.id === id);
      state.filteredItems=index;
     }
  },
});


export const {changeMode} = todosSlice.actions;
export default todosSlice.reducer;
