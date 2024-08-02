import { createSlice , nanoid} from "@reduxjs/toolkit";

// nanoid : make unique id's

const initialState = {
    todos:[{id:1,text:"Create New Todo"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload // playload -> Object
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }  
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer