import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo(state,action){
            state.push({
                id:nanoid(),
                text:action.payload.text,
                status:false,
            })
        },
        todoToggled(state,action){
            const todo = state.find((todo) => todo.id === action.payload)
            todo.status = !todo.status
        },
    },
})


export const {addTodo,todoToggled} = todoSlice.actions
export default todoSlice.reducer