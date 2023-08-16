import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const countForm = createSlice({
    name : 'countForm',
    initialState,
    reducers : {
        recalc : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {recalc} = countForm.actions;
export default countForm.reducer;
