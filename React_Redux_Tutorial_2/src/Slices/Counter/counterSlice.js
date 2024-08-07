import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value:0,
// }

export const counterSlice = createSlice({

    initialState:0,
    name:'counter',

    // Reducers => Functions
    reducers:{
        // Counter Increament Function
        increment : (state) => state += 1,
        decrement : (state) => state -= 1,
    },

});

// Make our Reducers function to React Events
export const { increment , decrement } = counterSlice.actions

export default counterSlice.reducer