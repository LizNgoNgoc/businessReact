import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const countSymbol = createSlice({
    name : "counter",
    initialState,
    reducers : {
        counter : (state, action) => {
            state.value < action.payload - 1 ? state.value++ : state.value = 0
        }
    }
})

export const {counter} = countSymbol.actions;
export default countSymbol.reducer;